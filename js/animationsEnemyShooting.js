
const enemyGun = document.querySelector('#enemyGun0')


const randNum = function(val){
  let x = Math.random()>0.49 ? 1 : -1;
  return Math.random()*val*x
};

const leftToTarget = document.documentElement.clientWidth+randNum(50);
const topToTarget = document.documentElement.clientHeight+randNum(50);



var count = 0
export const enemyShot = function(){
    console.log("liczba oddanych strzałów", count);
    count++;
    // enemyGun.classList.remove("ball0");
    enemyGun.style.opacity=1;
    let enemyShootingTl = new TimelineMax({ease: Power4.easeIn});
    enemyShootingTl.to('#enemyGun0', 0.4, {width: 400, height: 400, onComplete: function(){TweenMax.set("#enemyGun0", {clearProps: "all"})}})
}

