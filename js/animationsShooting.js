

const shotSpeed = 0.3;
export var shootTl = new TimelineMax()

export const shotOnTarget = function() {

   
    const shootTl = new TimelineMax()
    shootTl.fromTo(".ship",`${shotSpeed}`/2, {scale: 1}, {scale: 1.05})
    shootTl.fromTo(".ship",`${shotSpeed}`/2, {scale: 1.05}, {scale: 1})
    shootTl.to(".gun", `${shotSpeed}`, {top: `49.3%`, left: `49.9%`, height: 10, ease: Power4.easeOut, onComplete: function(){TweenMax.set(".gun", {clearProps: "all"})}}, `-=${shotSpeed}`) 
    
     
   
}