gsap.registerPlugin(ScrollTrigger);

gsap.from(".herman", {
  duration: 10,
  x: "-50vw",
  rotation: -360,
  ease: "linear",
  scrollTrigger: ".herman",
});
