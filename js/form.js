
  $(".form-container form").on("submit", function (e){
    e.preventDefault()
    
    //get rid of old messages if just radio option was missed
    $('.error-message').remove()
    $('.loading-container').remove()
  
    const input_values = {
      genderFemale : $('#female').val(),
      genderMale : $('#male').val(),
      genderUndefined : $('#undefined').val(),
      firstName : $('#first-name').val(),
      lastName : $('#last-name').val(),
      email : $('#email').val(),
      phone : $('#phone').val(),
      interest : $('#interest').val(),
      newsletterY : $('#n-yes').val(),
      newsletterN : $('#n-no').val(),
      message : $('#message').val()

    }
  
    const error_messages = {}
  
  // gender validation --> option checks if a radio button has been chosen, error message is at female for styling reasons
    if ($('input[name="gender"]:checked').length == 0){
      error_messages.genderFemale = 'please choose one option'
    }

    // first name validation
    if ( input_values.firstName.length <= 0 ) {
      error_messages.firstName = 'please insert your first name'
    }
  
    // last name validation
    if ( input_values.lastName.length <= 0 ) {
      error_messages.lastName = 'please write your last name'
    }
  
    // email validation
    const email_pattern = /(?:((?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?));*)/g
    if ( input_values.email.length <= 0  ) {
      error_messages.email = 'please enter a email adress'
    } else if ( !email_pattern.test(input_values.email) ) {
    // error message if not real email adress
      error_messages.email = 'your email seems a bit off today'
    } 
  
    // phone number validation
    const phone_pattern = /(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/
    if ( input_values.phone.length <= 0 ) {
      error_messages.phone = 'seems too short'} 
      else if( !phone_pattern.test(input_values.phone) ){
        error_messages.phone = 'phone number probably spelled wrong'
      }


      //interests validation
      if ($('select[name=interest]').val() == 0){
        error_messages.interest = 'please choose one option'
      }
  

      // newsletter validation
      if ($('input[name="newsletter"]:checked').length == 0){
        error_messages.newsletterY = 'please choose one option'
      }


    // message validation
    if ( input_values.message.length <= 30 ) {
      error_messages.message = 'please describe your inqury with 30 characters<br> minimum' 
    }
  
    // generate error messages
    if (!$.isEmptyObject(error_messages)){
      if ( error_messages.genderFemale ) {
        $('#female').after(`<div class="out-flow"><span class="error-message">${error_messages.genderFemale}</span></div>`)
      }
      if ( error_messages.firstName ) {
        $('#first-name').after(`<div class="out-flow"><span class="error-message">${error_messages.firstName}</span></div>`)
      }
      if ( error_messages.lastName ) {
        $('#last-name').after(`<div class="out-flow"><span class="error-message">${error_messages.lastName}</span></div>`)
      }
      if ( error_messages.email ) {
        $('#email').after(`<div class="out-flow"><span class="error-message email-message">${error_messages.email}</span></div>`)
      }
      if ( error_messages.phone ) {
        $('#phone').after(`<div class="out-flow"><span class="error-message phone-message">${error_messages.phone}</span></div>`)
      }
      if ( error_messages.interest ) {
        $('#interest').after(`<div class="out-flow"><span class="error-message interested-message">${error_messages.interest}</span></div>`)
      }
      if ( error_messages.newsletterY ) {
        $('#n-yes').after(`<div class="out-flow"><span class="error-message newsletter-message">${error_messages.newsletterY}</span></div>`)
      }
      if ( error_messages.message ) {
        $('#message').after(`<div class="out-flow"><span class="error-message message-huge">${error_messages.message}</span></div>`)
      }
      
    } else { //theoretically send data to server
      $('<div class="loading-container"><img src="data/images/graphics/sgif.gif" alt="Loading">. . . Sending Data</div>').appendTo('.form-container form')
  
      setTimeout(function () {
        
        $('.loading-container').html("data received. i'll get in touch with you!").css("color", "green").addClass( "fix-height" )
        //reset form, so it will look like data has been sent away
        $("form").trigger("reset");
      }, 4000)
    }
    
    
  })



//for user convenience, messages disappear while correcting
  $("form").keydown(function (){
    $('.error-message').remove()
  })