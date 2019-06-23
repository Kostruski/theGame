
// import {levelUpdate} from "./controls.js"
import {pilot} from "./startPage.js"
const startPage = document.querySelector(".startPage");
const hudinfo2 = document.querySelector(".info2");
const dispLevel = document.querySelector(".dispLevel");


export const explosion = function(el) {
  

    
   const enemyGun = document.querySelector(`.${el.className} div`);       
   TweenMax.killTweensOf(enemyGun );    
   TweenMax.killTweensOf(`.${el.className}`);
    el.innerHTML='<div class="busted"></div>';
    TweenMax.to(`.${el.className}`, 2, {
      opacity: 0,
      onComplete: function() {
        el.remove(); 
        let targetsList = document.querySelectorAll("[class^='ball']");    
        hudinfo2.innerText = `targets left ${targetsList.length}`;
        if (targetsList.length === 0) {
          pilot.level++;
          startPage.style.display = "flex";
          startPage.style.opacity = 1;
          startPage.innerHTML = `<strong>Good Job! Next level ${pilot.level}</strong>`;
          TweenMax.fromTo(
            "strong",
            2,
            { scale: 0 },
            {
              scale: 1.1,
              onComplete: function() {
                pilot.levelUpdate();
                startPage.style.display = "none";
              }
            }
          );
        }
      }
    });
  
     

}

