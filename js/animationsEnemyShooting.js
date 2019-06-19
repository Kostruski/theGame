
const enemyGun = document.querySelector('#enemyGun0');



const randNum = function(val){
  let x = Math.random()>0.49 ? 1 : -1;
  return Math.random()*val*x
};

const leftToTarget = document.documentElement.clientWidth+randNum(50);
const topToTarget = document.documentElement.clientHeight+randNum(50);




export const enemyShot = function(howOftenEnemyShoots, count) {

 
  console.log(count)
 
  if (count%howOftenEnemyShoots === 0 && count >= howOftenEnemyShoots ) {
    console.log("był strzał przy count = ", count);   
    enemyGun.style.opacity = 1;
    let enemyShootingTl = new TimelineMax({ ease: Power0.easeNone });
    enemyShootingTl.to("#enemyGun0", 0.4, {
      scale: 60,
      onComplete: function() {
        TweenMax.set("#enemyGun0", { clearProps: "all" });
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

