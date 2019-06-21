import {startStars} from "./starsMoving.js"
import { enterOfTarget } from "./animationsFlight.js";
import { moveAround, confirmHit } from "./controls.js";
import { shotOnTarget } from "./animationsShooting.js";

const wrap = document.querySelector(".wrap");
const frame = document.querySelector(".fr");

let level = 2;



;
startStars()

// wrap.addEventListener("mousemove", moveAround);
window.addEventListener("click", confirmHit);
window.addEventListener("click", shotOnTarget);
// enterOfTarget(".ball0", 8, 2); // cyfra 8 to howOftenEnemyShoots - co 8 starzał, cyfra 2 to  targetTweenDuration - szybkość przeciwnika
setInterval(function(){    
    wrap.addEventListener("mousemove", moveAround);
},50)

function levelUpdate(level)  {
    let numOfTargets = level+1;
    let howOftenEnemyShoots = 10;
    let targetTweenDuration = 2*(1-level/20);
    if (level%4==0 && level>4) howOftenEnemyShoots--;
    
    for(let i=0; i<numOfTargets; i++) {
        let newTarget = document.createElement("div");
        newTarget.classList.add(`ball${i}`);
        newTarget.innerHTML=`<div class="enemyGun"></div>`;
        frame.appendChild(newTarget);
        enterOfTarget(`${newTarget.className}`, howOftenEnemyShoots, targetTweenDuration);
    }

   
    
    // tu będą zmieniane parametry howOftenEnemyShoots, targetTweenDuration, ilość wrogów

}

levelUpdate(level)































