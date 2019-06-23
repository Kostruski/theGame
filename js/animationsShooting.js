import { confirmHit } from "./controls.js";



const shotSpeed = 0.2;
const gun = document.querySelectorAll(".gun")
export var shootTl = new TimelineMax()

export const shotOnTarget = function() {
    window.removeEventListener("click", confirmHit);
    window.removeEventListener("click", shotOnTarget);
   
    const shootTl = new TimelineMax();
    shootTl.fromTo(
      ".ship",
      `${shotSpeed}` / 2,
      { scale: 1 },
      { scale: 1.05 }
    );
    shootTl.fromTo(
      ".ship",
      `${shotSpeed}` / 2,
      { scale: 1.05 },
      { scale: 1 }
    );
    shootTl.to(
      ".gun",
      `${shotSpeed}`,
      {
        top: `49.3%`,
        left: `49.9%`,
        height: 10,
        ease: Power4.easeOut,
        onComplete: function() {
          
          TweenMax.set(".gun", { clearProps: "all" });
          gun.forEach(el => el.style.opacity = 1);
          window.addEventListener("click", confirmHit);
          window.addEventListener("click", shotOnTarget);
          

        }
      },
      `-=${shotSpeed}`
    ); 
    
     
   
}