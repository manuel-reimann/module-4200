// -----------GSAP Scroll Definitions -------------- // 
//register gsap libary
gsap.registerPlugin(ScrollTrigger);

//to prevent scrolling back on mobile phone if keyboard shows up
ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" 
});

let container = document.querySelector(".container");
let sections = gsap.utils.toArray(".panel");
//scrolling behaviour
let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    scroller: document.body,
    pin: true,
    scrub: 1,
    snap: {
      snapTo: 1 / (sections.length - 1),
      inertia: false,
      duration: {min: 0.2, max: 0.9}
    },
    end: () => "+=" + (container.scrollWidth - container.clientWidth),
  }
});

//line animations
gsap.to(".d-line-1",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#navi",
    end: 'right left',  
    scrub: true,
  },
  y: 400,
  duration: 5,
  ease: "none"
})

gsap.to(".d-line-2",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#navi",
    end: 'right left',  
    scrub: true,
  },
  y: 300,
  duration: 3,
  ease: "none"
})

gsap.to(".d-line-3",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#navi",
    end: 'right left',  
    scrub: true,
  },
  x: -500,
  duration: 4,
  ease: "none"
})

gsap.to(".d-line-4",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#navi",
    end: 'right left',  
    scrub: true,
  },
  x: -700,
  duration: 5,
  ease: "none"
})
gsap.to(".d-line-5",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#navi",
    end: 'right left',  
    scrub: true,
  },
  x: -700,
  duration: 5,
  ease: "none"
})
gsap.to(".d-line-6",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#navi",
    end: 'right left',  
    scrub: true,
  },
  y: -600,
  duration: 5,
  ease: "none"
})

// section photo start
gsap.to(".d-line-7",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#photo",
    end: 'right left',  
    scrub: true,
  },
  x: -500,
  duration: 4,
  ease: "none"
})

gsap.to(".d-line-8",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#photo",
    end: 'right left',  
    scrub: true,
  },
  x: -400,
  duration: 2,
  ease: "none"
})

gsap.to(".d-line-9",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#photo",
    end: 'right left',  
    scrub: true,
  },
  x: 400,
  duration: 4,
  ease: "none"
})

gsap.to(".d-line-10",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#photo",
    end: 'right left',  
    scrub: true,
  },
  y: -400,
  duration: 4,
  ease: "none"
})
gsap.to(".d-line-11",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#photo",
    end: 'right left',  
    scrub: true,
  },
  y: 200,
  duration: 5,
  ease: "none"
})
gsap.to(".d-line-12",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#photo",
    end: 'right left',  
    scrub: true,
  },
  y: 300,
  duration: 2,
  ease: "none"
})
gsap.to(".d-line-13",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#photo",
    end: 'right left',  
    scrub: true,
  },
  y: 200,
  duration: 4,
  ease: "none"
})

// section video start
gsap.to(".d-line-14",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#video",
    end: 'right left',  
    scrub: true,
  },
  x: 200,
  duration: 5,
  ease: "none"
})

gsap.to(".d-line-15",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#video",
    end: 'right left',  
    scrub: true,
  },
  x: 200,
  duration: 4,
  ease: "none"
})

gsap.to(".d-line-16",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#video",
    end: 'right left',  
    scrub: true,
  },
  x: -250,
  duration: 3,
  ease: "none"
})

gsap.to(".d-line-17",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#video",
    end: 'right left',  
    scrub: true,
  },
  y: 300,
  duration: 3,
  ease: "none"
})
gsap.to(".d-line-18",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#video",
    end: 'right left',  
    scrub: true,
  },
  y: -400,
  duration: 5,
  ease: "none"
})
gsap.to(".d-line-19",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#video",
    end: 'right left',  
    scrub: true,
  },
  y: -300,
  duration: 3,
  ease: "none"
})

// section about start
gsap.to(".d-line-20",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#about",
    end: 'right left',  
    scrub: true,
  },
  y: 100,
  duration: 2,
  ease: "none"
})
gsap.to(".d-line-21",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#about",
    end: 'right left',  
    scrub: true,
  },
  y: -200,
  duration: 4,
  ease: "none"
})
gsap.to(".d-line-22",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#about",
    end: 'right left',  
    scrub: true,
  },
  x: -200,
  duration: 4,
  ease: "none"
})
gsap.to(".d-line-23",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#about",
    end: 'right left',  
    scrub: true,
  },
  x: -200,
  duration: 4,
  ease: "none"
})
gsap.to(".d-line-24",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#about",
    end: 'right left',  
    scrub: true,
  },
  y: 200,
  duration: 4,
  ease: "none"
})
// section about contact
gsap.to(".d-line-25",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#contact",
    end: 'right left',  
    scrub: true,
  },
  y: 200,
  duration: 4,
  ease: "none"
})
gsap.to(".d-line-26",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#contact",
    end: 'right left',  
    scrub: true,
  },
  y: -200,
  duration: 4,
  ease: "none"
})
gsap.to(".d-line-27",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#contact",
    end: 'right left',  
    scrub: true,
  },
  x: 200,
  duration: 4,
  ease: "none"
})
gsap.to(".d-line-28",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#contact",
    end: 'right left',  
    scrub: true,
  },
  x: 400,
  duration: 4,
  ease: "none"
})
gsap.to(".d-line-29",{
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: "#contact",
    end: 'right left',  
    scrub: true,
  },
  y: 400,
  duration: 4,
  ease: "none"
})