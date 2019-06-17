
wrap = document.querySelector(".wrap");

view = document.querySelector(".view");
const stars = document.querySelector(".stars");

const croshair = document.querySelector('.croshair');
const targets = document.querySelectorAll(".target");


maxTop = (document.querySelector('.fr').offsetHeight)*0.45;
maxLeft = (document.querySelector('.fr').offsetWidth)*0.45;
frame = document.querySelector('.fr')
let count = 0;

function enemyStartPosition(enemy){
  enemy.style.display="block";
  enemy.style.transform="scale(0.1)"
  let randX = Math.floor(Math.random()*50)
  let randY = Math.floor(Math.random()*40)
  enemy.style.left = `${(Math.random()>0.5 ? -randX : 100+randX)}%`
  enemy.style.top = `${(Math.random()>0.5 ? -randY : 100+randY)}%`
  console.log("x",`${(Math.random()>0.5 ? -randX : 100+randX)}%`)
  console.log("y",`${(Math.random()>0.5 ? -randY : 100+randY)}%`)
}
enemyStartPosition(targets[0])

// losowa pozycja z której pojawia się statek tak aby go móc zestrzelić
// targets[0].style.left="-40%"; // z lewa stona
// targets[0].style.left="140%"; //z prawa stona
// targets[0].style.top="130%"; // z dółu
// targets[0].style.top="-30%"; // z góry



var tl = new TimelineMax({repeat:-1});
// tl.to(".ball0", 1 , { rotation: -5, ease: Power0.easeNone }) ciągły ruch na boki (nie potrzebne)
// tl.to(".ball0", 1 , { rotation: 5,ease: Power0.easeNone })
// tl.to(".ball0", 0.75 , { rotation: 0,ease: Power0.easeNone })

var tl2 = new TimelineMax({repeat:-1, yoyo: true});
tl2.to(".ball0", 1 , { y: 10, ease: Power0.easeNone})


const randNum = function(val){
  let x = Math.random()>0.49 ? 1 : -1;
  return Math.random()*val*x
}

const leftHalfPosition = function(elem) {
  x = elem.offsetLeft>elem.offsetParent.clientWidth/2 ? false : true;
  console.log("left",x);
  return x;
}
const topHalfPosition = function(elem) {
  x = elem.offsetTop<elem.offsetParent.clientHeight/2 ? true : false;
  console.log("top", x)
  return x;
}
var targetClass = ".ball0";
var targetEntranceSpeed = 5;



TweenMax.to(`${targetClass}`, `${targetEntranceSpeed}` , {top:`${randNum(40)+50}%`, left:`${randNum(45)+50}%`, scale: 1.2, ease: Power4.easeOut, onComplete: function(){
  let obj = this.target[0];
 
  leftHalfPosition(obj)
  topHalfPosition(obj)


  var targetTweenDuration = 4
 
  let xdirection = 1; 
  let ydirection = 1;

    // if(leftHalfPosition(obj) && topHalfPosition(obj)){    
      
   

    var tl = new TimelineMax({repeat: 1, ease: Power4.easeOut});

    tl.fromTo(`${targetClass}`, `${targetTweenDuration}`, {x:0, y:0}, {x:1000*`${xdirection}`});
    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: 0}, {rotation: 30*`${xdirection}`},`-=${targetTweenDuration}`);
    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: 30*`${xdirection}`},{rotation: 0},`-=${targetTweenDuration/2}`);
    tl.fromTo(`${targetClass}`, `${targetTweenDuration}`, {x:1000*`${xdirection}`}, {x:0, y:0});
    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: 0}, {rotation: -30*`${xdirection}`},`-=${targetTweenDuration}`);
    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: -30*`${xdirection}`},{rotation: 0},`-=${targetTweenDuration/2}`);
    
    tl.fromTo(`${targetClass}`,  `${targetTweenDuration/2}`, {x: 0, y:0},{x: 0, y:400*`${xdirection}`});

    tl.fromTo(`${targetClass}`, `${targetTweenDuration}`, {x:0, y:400*`${xdirection}`}, {x:1000*`${xdirection}`, y:400*`${xdirection}`});
    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: 0}, {rotation: 30*`${xdirection}`},`-=${targetTweenDuration}`);
    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: 30*`${xdirection}`},{rotation: 0},`-=${targetTweenDuration/2}`);
    tl.fromTo(`${targetClass}`, `${targetTweenDuration}`, {x:1000*`${xdirection}`, y:400*`${xdirection}`}, {x:0, y:400*`${xdirection}`});
    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: 0}, {rotation: -30*`${xdirection}`},`-=${targetTweenDuration}`);
    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: -30*`${xdirection}`},{rotation: 0},`-=${targetTweenDuration/2}`);
    
    tl.fromTo(`${targetClass}`,  `${targetTweenDuration/2}`,{y:400*`${xdirection}`}, {y:0});
    

    // tl.fromTo(".ball0", 1, { x:0, y:0},   {x:200, y:200});
    // tl.fromTo(".ball0", 1, {x:200, y:200},{x:400, y:100});
    // tl.fromTo(".ball0", 1, {x:400, y:100},{x:600, y:200});
    // tl.fromTo(".ball0", 1, {x:600, y:200},{x:800, y:100});
    // tl.fromTo(".ball0", 1, {x:800, y:100},{x:1000, y:200} );
    // tl.fromTo(".ball0", 1, {ease: SlowMo.ease.config(0.7, 0.7, false), x:1000, y:200},{x:0, y:0});
    
    // var tl = new TimelineMax({yoyo: true, repeat: -1, ease: Power4.easeOut});
    // tl.fromTo(".ball0", 5, { x:0, y:0},                       {x:100+`${rand}`, y:200+`${rand}`});
    // tl.fromTo(".ball0", 5, {x:100+`${rand}`, y:200+`${rand}`},{x:200+`${rand}`, y:100+`${rand}`});
    // tl.fromTo(".ball0", 5, {x:200+`${rand}`, y:100+`${rand}`},{x:300+`${rand}`, y:200+`${rand}`});
    // tl.fromTo(".ball0", 5, {x:300+`${rand}`, y:200+`${rand}`},{x:400+`${rand}`, y:100+`${rand}`});
    // tl.fromTo(".ball0", 5, {x:400+`${rand}`, y:100+`${rand}`},{x:500+`${rand}`, y:200+`${rand}`} );
    // tl.fromTo(".ball0", 5, {x:500+`${rand}`, y:200+`${rand}`},{x:600+`${rand}`, y:0});
   
    
    // if(leftHalfPosition(obj) && !topHalfPosition(obj)){ 
    
  //   var tl1 = new TimelineMax({yoyo: false, repeat: 2, ease: Power4.easeOut});
  //     tl1.to(".ball0", 2 , { x: 600, y: 10 })
  //     tl1.to(".ball0", 2 , { x: 10, y: -300})
  //     tl1.to(".ball0", 2 , { x:-600, y: -10})
  //     tl1.to(".ball0", 2 , { x: -10, y: 300})
  //   }
    
  

  
  // var tlflightIn = new TimelineMax();


  
  //  tlflightIn.to(".ball0", 2 , { y: 400, scale: 1.2, ease: Power0.easeNone });
  //  tlflightIn.to(".ball0", 2 , { y: 400, scale: 1.2, ease: Power0.easeNone })
}})









// const animTargets = setInterval(function() {
//   rnadwal = (randval > 0) ? -1 : 1;
//   rnadwal1 = (randval1 > 0) ? -1 : 1;
  
//   randX = Math.floor(Math.random()*(maxLeft-40)+40)*randval;
//   randY = Math.floor(Math.random()*(maxTop-40)+40)*randval1;

//   console.log(randval, randval1)
//   console.log(randX,randY)

//   count++;
//   if(count>5) clearInterval(animTargets)

// },1000)




// const startTargets = setInterval(function(){
//   randval = Math.random()>0.49 ? 1 : -1;
//   randval1 = Math.random()>0.49 ? 1 : -1;
  
  
//   randX = Math.floor(Math.random()*(maxLeft-40)+40)*randval;
//   randY = Math.floor(Math.random()*(maxTop-40)+40)*randval1;
//   console.log(randval,randval1,randX,randY)  


//   let newTarget = document.createElement("div");
//   newTarget.classList.add(`target`);
//   newTarget.classList.add(`ball${count}`);
//   frame.appendChild(newTarget);
//   count++;
 
//   TweenMax.to(".ball0", 6, {left:randX, top: randY, })
//   TweenMax.to(".ball1", 6, {left:randX, top: randY, })
//   TweenMax.to(".ball3", 6, {left:randX, top: randY, })
//   TweenMax.to(".ball2", 6, {left:randX, top: randY, })

  

//   if(count>5) clearInterval(startTargets)
  
// },2000)


















 window.addEventListener("click", function(){

  croX = croshair.getBoundingClientRect().left;
  croY = croshair.getBoundingClientRect().top;


  targets.forEach(el => { // funkcja wskazująca trafienie
    let valX = el.getBoundingClientRect().left;
    let valY = el.getBoundingClientRect().top;
    let hitX = Math.abs(croX-valX)<croshair.clientWidth ? true : false;
    let hitY = Math.abs(croY-valY)<croshair.clientHeight ? true : false;
    // console.log(croX, "polozenie celownika")
    // console.log(valX, "polozenie x pilki");
    // console.log(Math.abs(croX-valX), "róznica")
    // console.log(croshair.width, "szerokość celownika")
    // console.log(hitX);
    

    if(hitX && hitY) el.remove() // trafienie
  });

 })


 // ruch tła po ekranie
  wrap.addEventListener("mousemove", function(e) { 
  let pad = 0.9 // odsuwa ruch myszki przy krawędziach widoku o 10% można regulowac mouse sensitivity
  let asixX = (e.clientX - window.innerWidth/2 ) * -1;
  let asixXstyleValue = asixX + (asixX*pad) ;
  let asixY = (e.clientY- window.innerHeight/2 ) * -1;
  let asixYstyleValue = asixY + (asixY*pad);
  // console.log(asixX, asixY );
  // console.log(asixXstyleValue, asixYstyleValue )
  view.style.left = asixXstyleValue + "px";
  view.style.top = asixYstyleValue + "px";

})

wrap.addEventListener("click", function(e){
      // console.log("x",e.clientX,"   y", e.clientY);
      leftHalfPosition(targets[0]);
      topHalfPosition(targets[0])
      
   })

croshair.addEventListener("click", function(e){
  // console.log("x",e.clientX,"   y", e.clientY);
 tl.pause();
 tl1.pause();
})







// setInterval(function() {
    
 
  



//   // var wartosci = this.getBoundingClientRect();

//   // console.log(wartosci)

//   // document.querySelector("#globalX").innerText = e.clientX;
//   // document.querySelector("#globalY").innerText = e.clientY;
//   // document.querySelector("#localY").innerText = e.clientX-wartosci.x;
//   // document.querySelector("#localX").innerText = e.clientY-wartosci.y;
// }, 500);
