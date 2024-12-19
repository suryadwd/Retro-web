


var tl = gsap.timeline()

tl.to(".page1",{
  y:"100vh",
  scale:0.5,
  duration:0
})

tl.to(".page1",{
  y:"30vh",
  duration:1.5,
  delay:1
})

tl.to(".page1",{
  y:"0vh",
  duration:1,
  rotate:360,
  scale:1
})

