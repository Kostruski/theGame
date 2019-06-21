
// const hud = document.querySelector(".hud");
const hudinfo1 = document.querySelector(".info1");




const randNum = function(val){
  let x = Math.random()>0.49 ? 1 : -1;
  return Math.random()*val*x
};

const leftToTarget = document.documentElement.clientWidth+randNum(50);
const topToTarget = document.documentElement.clientHeight+randNum(50);

export let enemyShootingTl = new TimelineMax({ ease: Power0.easeNone });

export let damage = 0;

export const enemyShot = function(targetClass,howOftenEnemyShoots,count) {
 
 

     
  if (count%howOftenEnemyShoots === 0 && count >= howOftenEnemyShoots ) {
    console.log("był strzał przy count = ",targetClass, damage +"% ", count);  
    const enemyGun = document.querySelector(`.${targetClass} div`)
    enemyGun.style.opacity = 1;
    damage ++;
      
    
    enemyShootingTl.to(enemyGun, 0.4, {
      scale: 60,
      onComplete: function() {
        hudinfo1.innertText=(`Damage ${damage}% !`) 
        TweenMax.set(enemyGun, { clearProps: "all" });
        hudinfo1.innerText = (damage===10) ? `Game Over` : `Damage ${damage}0% !`; 
      }
    });
    enemyShootingTl.from(".wrap", 0.1, {
      backgroundColor: `rgba(238, 56, 50, 0.185)`,
      onComplete: function() {
      TweenMax.set(".wrap", { clearProps: "all" }, "-=0.1");

      }
    });
  } 
  
  
};





