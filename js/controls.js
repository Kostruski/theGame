const wrap = document.querySelector(".wrap");

const view = document.querySelector(".view");
const stars = document.querySelector(".stars");

const croshair = document.querySelector(".croshair");
const targets = document.querySelectorAll(".target");

const maxTop = document.querySelector(".fr").offsetHeight * 0.45;
const maxLeft = document.querySelector(".fr").offsetWidth * 0.45;
const frame = document.querySelector(".fr");
let count = 0;

export const confirmHit = function() {
  let croX = croshair.getBoundingClientRect().left;
  let croY = croshair.getBoundingClientRect().top;
 

  targets.forEach(el => {
    // funkcja wskazująca trafienie
    let valX = el.getBoundingClientRect().left;
    let valY = el.getBoundingClientRect().top;
    let hitX = Math.abs(croX - valX) < croshair.clientWidth ? true : false;
    let hitY = Math.abs(croY - valY) < croshair.clientHeight ? true : false;
    // console.log(croX, "polozenie celownika")
    // console.log(valX, "polozenie x pilki");
    // console.log(Math.abs(croX-valX), "róznica")
    // console.log(croshair.width, "szerokość celownika")
    // console.log(hitX);

    if (hitX && hitY) el.remove(); // trafienie
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
  
  
  
  
  
  
  
  