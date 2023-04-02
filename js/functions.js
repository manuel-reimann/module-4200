//mobile click function going through galleries
  $(".more-btn").click(function (){
    //first two galleries have the class mobile-active in the DOM
    const activeGalleries = $(".gallery-container").find('.mobile-active')
    const nextGalleries = activeGalleries.closest('div').nextAll().slice(1,3)
    //hide the active galleries
    activeGalleries.removeClass("mobile-active")
    activeGalleries.addClass("mobile-hide")
    //show the inactive galleries
    nextGalleries.removeClass("mobile-hide")
    nextGalleries.addClass("mobile-active")
    //if the last class was removed at the bottom, start again on top
    if(!$('.gallery-container').children().hasClass("mobile-active")){
      //show two first galleries
      const firstGalleries = $(".gallery-container").children().slice(0,2)
      firstGalleries.removeClass("mobile-hide")
      firstGalleries.addClass("mobile-active")
    }

  })

 //Desktop click function going through galleries
  $(".more-btn-desktop").click(function (){
    const activeDesktopGalleries = $(".gallery-container").find(".desktop-active")
    const nextDesktopGalleries = activeDesktopGalleries.last().closest("div").nextAll()
   
    activeDesktopGalleries.removeClass("desktop-active")
    activeDesktopGalleries.addClass("desktop-hide")
    //show the inactive galleries
    nextDesktopGalleries.removeClass("desktop-hide")
    nextDesktopGalleries.addClass("desktop-active")

    if(!$('.gallery-container').children().hasClass("desktop-active")){
      //show two first galleries
      const firstGalleries = $(".gallery-container").children().slice(0,6)
      firstGalleries.removeClass("desktop-hide")
      firstGalleries.addClass("desktop-active")
    }
 })
 

 //mobile click function going through video galleries
 $(".more-btn").click(function (){
  //first two galleries have the class mobile-active in the DOM
  const activeGalleries = $(".video-container").find('.mobile-active')
  const nextGalleries = activeGalleries.closest('div').nextAll().slice(1,3)
  //hide the active galleries
  activeGalleries.removeClass("mobile-active")
  activeGalleries.addClass("mobile-hide")
  //show the inactive galleries
  nextGalleries.removeClass("mobile-hide")
  nextGalleries.addClass("mobile-active")
  //if the last class was removed at the bottom, start again on top
  if(!$('.video-container').children().hasClass("mobile-active")){
    //show two first galleries
    const firstGalleries = $(".video-container").children().slice(0,2)
    firstGalleries.removeClass("mobile-hide")
    firstGalleries.addClass("mobile-active")
  }

})
