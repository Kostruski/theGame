
import {targetInSight} from "./animationsFlight.js" //możliwość zestrzelenia statku dopiero po zakończeniu pierwszej animacji;
const hudinfo2 = document.querySelector(".info2")
export const explosion = function(el) {

  if(targetInSight) {
    
   const enemyGun = document.querySelector(`.${el.className} div`);       
   TweenMax.killTweensOf(enemyGun );    
   TweenMax.killTweensOf(`.${el.className}`);
    el.innerHTML='<div class="busted"></div>';
    TweenMax.to(`.${el.className}`, 2, {opacity:0, onComplete: function(){
      el.remove();
      const targetsList = document.querySelectorAll("[class^='ball']");
      hudinfo2.innerText = (`targets left ${targetsList.length}`)
    }})
   }   
     

}