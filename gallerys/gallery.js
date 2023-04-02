//lightbox-gallery:  1. click event on image
$(".gallery-item img").click(function (){
  //variables for data src and alt tag
  const img_src = $(this).attr("src")
  const img_alt = $(this).attr("alt")
  //adding the lightbox div as overlay, before body
  $(`<div class="lightbox">
      <div class="arrow arrow-left"><</div>
      <img src="${img_src}" alt="${img_alt}" class="active">
      <div class="close">x</div>
      <div class="arrow arrow-right">></div>
      </div>`).prependTo('body')
})
//closing the lightbox
$(document).on("click", ".close", function (){
  $(".lightbox").remove()
})



//making the arrows go to work --- right arrow
//we need this on("click")-method because arrow-right doesnt exist in the DOM when the page is loaded
$(document).on("click", ".arrow-right", function () {
  //save path of displayed photo in variable
  const activeImg = $(".active").attr("src")
  const activeAlt = $(".active").attr("alt")
  //check in the existing dom for the second time this src exists
  const activeImgDom = document.querySelectorAll(`img[src="${activeImg}"]:nth-child(1)`)
  const activeAltDom = document.querySelectorAll(`img[alt="${activeAlt}"]:nth-child(1)`)
  //make your way up and down to the next img
  const nextImg = $(activeImgDom).parent().next().children().attr("src")
  const nextAlt = $(activeAltDom).parent().next().children().attr("alt")
  //overwrite displayed img in lightbox with src and alt of next image
  $(".lightbox img").attr("src", nextImg)
  $(".lightbox img").attr("alt", nextAlt)

//if next clicked on last picture, then --> 
if(!$(activeImgDom).parent().next().children().attr("src")){
  //save src of first image in variable
  const firstImg = $(".first").attr("src")
  const firstAlt = $(".first").attr("alt")
  //insert in lightbox
  $(".lightbox img").attr("src", firstImg)
  $(".lightbox img").attr("alt", firstAlt)
}
  })




//making the arrows go to work --- left arrow
$(document).on("click", ".arrow-left", function () {
  //save path of displayed photo in variable
  const activeImg = $(".active").attr("src")
  const activeAlt = $(".active").attr("alt")
  //check in the existing dom for the second time this src exists
  const activeLastImgDom = document.querySelectorAll(`img[src="${activeImg}"]:nth-child(1)`)
  const activeLastAltDom = document.querySelectorAll(`img[alt="${activeAlt}"]:nth-child(1)`)
  //make your way up and down to the next img
  const lastImg = $(activeLastImgDom).parent().prev().children().attr("src")
  const lastAlt = $(activeLastAltDom).parent().prev().children().attr("alt")
  //overwrite displayed img in lightbox with src and alt of next image
  $(".lightbox img").attr("src", lastImg)
  $(".lightbox img").attr("alt", lastAlt)

//if previous clicked on first picture, then --> 
if(!$(activeLastImgDom).parent().prev().children().attr("src")){
  //save src of first image in variable
  const lastImg = $(".last").attr("src")
  const lastAlt = $(".last").attr("alt")
  //insert in lightbox
  $(".lightbox img").attr("src", lastImg)
  $(".lightbox img").attr("alt", lastAlt)
}
  })

