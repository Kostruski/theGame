
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



 //dopisać zawarcanie
var tl = new TimelineMax({repeat:-1,});
tl.to(".ball0", 1 , { rotation: -5, ease: Power0.easeNone })
tl.to(".ball0", 1 , { rotation: 5,ease: Power0.easeNone })
tl.to(".ball0", 0.75 , { rotation: 0,ease: Power0.easeNone })

var tl1 = new TimelineMax({repeat:-1,});;
tl1.to(".ball0", 6 , { y: 50, ease: Power0.easeNone })
tl1.to(".ball0", 6 , { y: 0, ease: Power0.easeNone })

const randNum = function(val){
  let x = Math.random>0.49 ? 1 : -1;
  return Math.random()*val*x
}

const leftHalfPosition = function(elem) {
  x = elem.offsetLeft>elem.offSetParent.clientWidth/2 ? true : false;
  console.log(x)
}



TweenMax.to(".ball0", 6 , {top:`${randNum(40)+50}%`, left:`${randNum(35)+50}%`, scale: 1.2, ease: Power4.easeOut, onComplete: function(){
  var tlflightIn = new TimelineMax();

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
      console.log("x",e.clientX,"   y", e.clientY);
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
