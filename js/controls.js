const wrap = document.querySelector(".wrap");
import {explosion} from "./animationsExplosion.js"

const view = document.querySelector(".view");
const stars = document.querySelector(".stars");

const croshair = document.querySelector(".croshair");
const targets = document.querySelectorAll("[class^=ball]");


const maxTop = document.querySelector(".fr").offsetHeight * 0.45;
const maxLeft = document.querySelector(".fr").offsetWidth * 0.45;
const frame = document.querySelector(".fr");
let count = 0;

export const confirmHit = function() {
  let croX = croshair.getBoundingClientRect().left;
  let croY = croshair.getBoundingClientRect().top;
 

  targets.forEach(el => {
    // funkcja wskazująca trafienie
    let valX = el.getBoundingClientRect().left+el.clientWidth/2;
    let valY = el.getBoundingClientRect().top+el.clientHeight/2;
    let hitX = Math.abs(croX - valX) < croshair.clientWidth ? true : false;
    let hitY = Math.abs(croY - valY) < croshair.clientHeight ? true : false;
    // console.log(croX, "polozenie x celownika")
    // console.log(croY, "polozoenie y celownika ")
    // console.log(valX, "polozenie x celu");
    // console.log(valY, "polozenie y celu");
    // console.log(Math.abs(croX-valX), "róznica")
    // console.log(croshair.clientWidth, "szerokość celownika")
    // console.log( "czy trafiony x", hitX);
    // console.log("czy trafiony y", hitY)
    // console.log(el.clientWidth, "serokość")

    if (hitX && hitY) {
      
          
      explosion(el)
      
      // el.remove()
    }
  });
};

// ruch tła po ekranie
export const moveAround = function(e) {
  let pad = 0.9; // odsuwa ruch myszki przy krawędziach widoku o 10% można regulowac mouse sensitivity
  let asixX = (e.clientX - window.innerWidth / 2) * -1;
  let asixXstyleValue = asixX + asixX * pad;
  let asixY = (e.clientY - window.innerHeight / 2) * -1;
  let asixYstyleValue = asixY + asixY * pad;
  // console.log(asixX, asixY );
  // console.log(asixXstyleValue, asixYstyleValue )
  view.style.left = asixXstyleValue + "px";
  view.style.top = asixYstyleValue + "px";
};
  
  
  
  
  
  
  
  