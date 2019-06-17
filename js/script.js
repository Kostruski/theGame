
import { enterOfTarget } from "./animationsFlight.js";
import { moveAround, confirmHit } from "./controls.js";
import { shotOnTarget } from "./animationsShooting.js";

const wrap = document.querySelector(".wrap");

const view = document.querySelector(".view");
const stars = document.querySelector(".stars");

const croshair = document.querySelector(".croshair");
const targets = document.querySelectorAll(".target");

const maxTop = document.querySelector(".fr").offsetHeight * 0.45;
const maxLeft = document.querySelector(".fr").offsetWidth * 0.45;
const frame = document.querySelector(".fr");
let count = 0;

wrap.addEventListener("mousemove", moveAround);
window.addEventListener("click", confirmHit);
window.addEventListener("click", shotOnTarget);
enterOfTarget(".ball0");































