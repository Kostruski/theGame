import {tl} from "./animationsFlight.js";
import {shootTl} from "./animationsShooting.js"
import {targetInSight} from "./animationsFlight.js" //możliwość zestrzelenia statku dopiero po zakończeniu pierwszej animacji;

export const explosion = function(el) {

  if(targetInSight) {
    shootTl.kill(); 
    tl.kill();
    el.innerHTML='<div class="busted"></div>';
    TweenMax.to(`.${el.className}`, 1, {opacity:0, onComplete: function(){
      el.remove();
    }})
    // setTimeout(function(){
    //   el.remove()
    // }, 1000)
  } 
    
     
      
      
    // const explosionTl = new TimelineMax();
    // explosionTl.to(`.${elme}`:after, 1, {scale: 2, backgroundPosition: `-4500px  0`})
    //el.remove()
}