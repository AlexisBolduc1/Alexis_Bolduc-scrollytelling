gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
/* gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);*/

gsap.fromTo(
  ".fleche",
  {
    y: "0%",
  },
  {
    y: "1vh",
    duration: 1,
    repeat: -1,
  }
);

const body = document.querySelector("body");
let time;

function removeClass() {
  body.classList.remove("is-scrolling");
}

function resetTimeout() {
  clearTimeout(time);
  time = setTimeout(removeClass, 100);
}

function Scroll() {
  body.classList.add("is-scrolling");
  resetTimeout();
}

window.addEventListener("scroll", Scroll);

/* Animation scène 1 */

gsap
  .timeline({
    scrollTrigger: {
      markers: false,
      scrub: true,
      pin: true,
      trigger: "#scene1",
      start: "center center",
    },
  })
  .to(".boule1", {
    duration: 5,
    ease: "linear",
    motionPath: {
      path: "M43.9810017,95.4108211 C111.962705,125.226874 238.51326,0 303.357347,0 C368.201433,0 383.889518,65.5947682 315.907815,95.4108211 C247.926112,125.226874 121.040326,0 56.53147,0 C-7.97738609,0 -24.0007016,65.5947682 43.9810017,95.4108211 Z",
      autoRotate: 90,
    },
  });

gsap.to("#scene1", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
    trigger: "#scene1",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: false,
  },
});

gsap.to(".ile", {
  bottom: "20%",
  ease: "none",
  scrollTrigger: {
    trigger: "#scene1",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: false,
  },
});

gsap.to(".nuages", {
  bottom: "40%",
  ease: "none",
  scrollTrigger: {
    trigger: "#scene1",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: false,
  },
});

/* Animation scène 2 */
gsap
  .timeline({
    scrollTrigger: {
      markers: false,
      scrub: true,
      pin: true,
      trigger: "#scene2",
      start: "center center",
    },
  })
  .to(".spritesheet", { y: "100vh", duration: 4 })
  .from(
    ".fun",
    { x: "100vw", rotation: 360, duration: 4, ease: "bounce.out", y: -500 },
    "<"
  );

/* Animation scène 3 */
/*gsap.set("#trace", { drawSVG: "0% 0%" });*/

gsap
  .timeline({
    scrollTrigger: {
      markers: false,
      scrub: true,
      pin: true,
      trigger: "#scene3",
      start: "center center",
    },
  })
  .from(".sit", { x: "-100vw", duration: 4, ease: "power4.out" })
  /*.to("#trace", { drawSVG: "0% 100%", duration: 5, ease: "power1.inOut" });*/

  let animation3 = gsap.to(".boule3", {
    y: 100,
    duration: 4,
    repeat: -1,
    yoyo: true
  });

  gsap.to(".boule3", {
    scrollTrigger: {
      trigger: "#scene3",
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        animation3.play();
      },
      onLeaveBack: () => {
        animation3.pause();
      }
    }
  });

/* Animation scène 4 */
gsap
  .timeline({
    scrollTrigger: {
      markers: false,
      scrub: true,
      pin: true,
      trigger: "#scene4",
      start: "center center",
    },
  })
  .from(".spritesheet_nuage", {
    x: "-100vw",
    duration: 2,
    ease: "slow(0.7, 0.7, false)",
  })
  .from(".stand", { x: "-100vw", duration: 2, ease: "slow(0.7, 0.7, false)" })
  .from(".standing", { x: "100vw", duration: 2, ease: "slow(0.7, 0.7, false)" })
  .from(".voiture1", { x: "-100vw", duration: 2, ease: "power4.out" })
  .from(".voiture2", { x: "100vw", duration: 2, ease: "power4.out" }, "<");

/* Animation scène 5 */
/*MorphSVGPlugin.convertToPath("circle")*/

gsap
  .timeline({
    scrollTrigger: {
      markers: false,
      scrub: true,
      pin: true,
      trigger: "#scene5",
      start: "center center",
    },
  })
  /*.to("#pathrond", {duration: 3, 
    morphSVG:{shape:"#pathballe", shapeIndex:20}})*/
  .from(".angle", { x: "-100vw", duration: 2, ease: "slow(0.7, 0.7, false)" })
  .from(".scared", {
    x: "100vw",
    skewX: "50deg",
    duration: 2,
    ease: "power4.out",
  })
  .from(".manshot", {
    x: "-50vw",
    skewX: "50deg",
    duration: 2,
    ease: "power4.out",
  });

  let animation5 = gsap.fromTo(".boule5", {
    opacity: 0,
    x: -100
  }, {
    opacity: 1,
    x: 0,
    duration: 2,
    paused: true,
    ease: "power2.out"
  });

  gsap.to(".boule5", {
    scrollTrigger: {
      trigger: ".boule5",
      scrub: false,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        animation5.play();
      },
      onLeaveBack: () => {
        animation5.reverse();
      },
      onLeave: () => {
        animation5.pause();
      },
      onUpdate: (self) => {
        if (self.direction === -1) {
          animation5.reverse();
        } else if (self.direction === 1) {
          animation5.play();
        }
        if (self.progress === 1) {
          animation5.progress(1);
        } else if (self.progress === 0) {
          animation5.progress(0);
        }
      }
    }
  });

