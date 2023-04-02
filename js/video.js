//lightbox-gallery:  1. click event on image
$(".video-container div").click(function (){
  //variables for data src and alt tag
  const vid_src = $(this).attr("href")
  
  //adding the lightbox div as overlay, before body
  $(`<div class="lightbox">
        
          <iframe width="360" height="240" src="${vid_src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <div class="close">x</div>
      </div>`).prependTo('#video')
      //add wrapper for a responsive container
      $(".video-container").addClass("wrapper")
    })

//closing the lightbox
$(document).on("click", ".close, .lightbox", function (){
  $(".lightbox").remove()
})
