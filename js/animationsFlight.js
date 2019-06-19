import {enemyShot} from "./animationsEnemyShooting.js";
export  let tl = new TimelineMax({repeat: 1, yoyo: `${Math.random()>0.5}`}); //
export let targetInSight = false

// opis ruchu statku po pojawieniu się na ekranie
const targetMovement = function( targetClass, targetTweenDuration, xdirection, ydirection, howOftenEnemyShoots ) {

    // var tl2 = new TimelineMax({repeat:-1, yoyo: true}); delikatne unoszenie się do góry chyba nie potrzeben
    // tl2.to(".ball0", 1 , { y: 10, ease: Power0.easeNone})

    let ease = "Back.easeOut.config(3)" // bounce
    let ease1 = "Power4.easeOut";
    let ease2 = "Elastic.easeInOut.config(1, 0.3)" // elastic 

    
    let count = 0;

    tl.fromTo(`${targetClass}`, `${targetTweenDuration}`, {x:0, y:0}, {x:1000*`${xdirection}`, y:0, ease: `${ease2}`,onComplete: function(){
      count++;
      enemyShot(howOftenEnemyShoots,count)
    }, onReverseComplete: function(){
      count++;
      enemyShot(howOftenEnemyShoots,count)
    }
  });

    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: 0}, {rotation: 30*`${xdirection}`},`-=${targetTweenDuration}`);
    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: 30*`${xdirection}`},{rotation: 0},`-=${targetTweenDuration/2}`);

    tl.fromTo(
      `${targetClass}`,
      `${targetTweenDuration}`,
      { x: 1000 * `${xdirection}` },
      {
        x: 0,
        y: 0,
        ease: `${ease2}`,
        onComplete: function() {
          count++;
          enemyShot(howOftenEnemyShoots, count);
        },
        onReverseComplete: function() {
          count++;
          enemyShot(howOftenEnemyShoots, count);
        }
      }
    );

    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: 0}, {rotation: -30*`${xdirection}`},`-=${targetTweenDuration}`);
    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: -30*`${xdirection}`},{rotation: 0},`-=${targetTweenDuration/2}`);

    tl.fromTo(`${targetClass}`,  `${targetTweenDuration/2}`, {x: 0, y:0},{x: 0, y:400*`${ydirection}`, ease: `${ease2}` , onComplete: function(){       count++;       enemyShot(howOftenEnemyShoots,count)     }, onReverseComplete: function(){       count++;       enemyShot(howOftenEnemyShoots,count)     }});

    tl.fromTo(`${targetClass}`, `${targetTweenDuration}`, {x:0, y:400*`${ydirection}`}, {x:1000*`${xdirection}`, y:400*`${ydirection}`, ease: `${ease2}` , onComplete: function(){       count++;       enemyShot(howOftenEnemyShoots,count)     }, onReverseComplete: function(){       count++;       enemyShot(howOftenEnemyShoots,count)     }});
    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: 0}, {rotation: 30*`${xdirection}`},`-=${targetTweenDuration}`);
    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: 30*`${xdirection}`},{rotation: 0},`-=${targetTweenDuration/2}`);

    tl.fromTo(`${targetClass}`, `${targetTweenDuration}`, {x:1000*`${xdirection}`, y:400*`${ydirection}`}, {x:0, y:400*`${ydirection}`, ease: `${ease2}` , onComplete: function(){       count++;       enemyShot(howOftenEnemyShoots,count)     }, onReverseComplete: function(){       count++;       enemyShot(howOftenEnemyShoots,count)     }});

    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: 0}, {rotation: -30*`${xdirection}`},`-=${targetTweenDuration}`);
    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: -30*`${xdirection}`},{rotation: 0},`-=${targetTweenDuration/2}`);

    tl.fromTo(`${targetClass}`,  `${targetTweenDuration/2}`,{x: 0, y:400*`${ydirection}`}, {x: 0, y:0 , ease: `${ease2}` , onComplete: function(){       count++;       enemyShot(howOftenEnemyShoots,count)     }, onReverseComplete: function(){       count++;       enemyShot(howOftenEnemyShoots,count)     }});
     
    // dodtkowa faza lotu po skosie

    tl.fromTo(`${targetClass}`, `${targetTweenDuration}`, {x:0, y:0}, {x:1000*`${xdirection}`, y:400*`${ydirection}`, ease: `${ease2}` , onComplete: function(){       count++;       enemyShot(howOftenEnemyShoots,count)     }, onReverseComplete: function(){       count++;       enemyShot(howOftenEnemyShoots,count)     }});

    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: 0}, {rotation: 30*`${xdirection}`},`-=${targetTweenDuration}`);
    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: 30*`${xdirection}`},{rotation: 0},`-=${targetTweenDuration/2}`);

    tl.fromTo(`${targetClass}`, `${targetTweenDuration}`, {x:1000*`${xdirection}`, y:400*`${ydirection}`}, {x:1000*`${xdirection}`, y:0, ease: `${ease2}` , onComplete: function(){       count++;       enemyShot(howOftenEnemyShoots,count)     }, onReverseComplete: function(){       count++;       enemyShot(howOftenEnemyShoots,count)     }});

    tl.fromTo(`${targetClass}`, `${targetTweenDuration}`, {x:1000*`${xdirection}`, y:0}, {x:0, y:400*`${ydirection}`, ease: `${ease2}` , onComplete: function(){       count++;       enemyShot(howOftenEnemyShoots,count)     }, onReverseComplete: function(){       count++;       enemyShot(howOftenEnemyShoots,count)     }});

    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: 0}, {rotation: -30*`${xdirection}`},`-=${targetTweenDuration}`);
    tl.fromTo(`${targetClass}`, `${targetTweenDuration/2}`, {rotation: -30*`${xdirection}`},{rotation: 0},`-=${targetTweenDuration/2}`);

    tl.fromTo(`${targetClass}`, `${targetTweenDuration}`, {x:0, y:400*`${ydirection}`}, {x:0, y:0, ease: `${ease2}` , onComplete: function(){       count++;       enemyShot(howOftenEnemyShoots,count)     }, onReverseComplete: function(){       count++;       enemyShot(howOftenEnemyShoots,count)     }});
  };




export const enterOfTarget = function(targetClass, howOftenEnemyShoots) {
    const enemyElement = document.querySelector(targetClass);

    const randNum = function(val){
      let x = Math.random()>0.49 ? 1 : -1;
      return Math.random()*val*x
    };

    const leftHalfPosition = function(elem) {
      let x = elem.offsetLeft>elem.offsetParent.clientWidth/2 ? false : true;
      // console.log("left",x);
      return x;
    };
    const topHalfPosition = function(elem) {
      let x = elem.offsetTop<elem.offsetParent.clientHeight/2 ? true : false;
      // console.log("top", x)
      return x;
    };

    const targetEntranceSpeed = 3; 
    const targetTweenDuration = 1 // czas pomiędzy zmianami w animacji ruchu samolotu przeciwnika
   

    function enemyStartPosition(enemyElement){
      enemyElement.style.transform="scale(0.1)"
      let randX = Math.floor(Math.random()*50)
      let randY = Math.floor(Math.random()*40)
      enemyElement.style.left = `${(Math.random()>0.5 ? -randX : 100+randX)}%`
      enemyElement.style.top = `${(Math.random()>0.5 ? -randY : 100+randY)}%`
     }
    enemyStartPosition(enemyElement)

    TweenMax.to(`${targetClass}`, `${targetEntranceSpeed}` , {top:`${randNum(40)+50}%`, left:`${randNum(45)+50}%`, scale: 1.2, ease: Power4.easeOut, onComplete: function(){
   
    targetInSight = true;
    document.querySelector(`${targetClass}`).style.backgroundImage = "url('./img/tiec.svg')"

    let xdirection = leftHalfPosition( enemyElement) ? 1 : -1;
    let ydirection =  topHalfPosition( enemyElement) ? 1 : -1;
  

    targetMovement(targetClass, targetTweenDuration, xdirection, ydirection, howOftenEnemyShoots)


}})

}
