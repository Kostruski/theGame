import { enterOfTarget } from "./animationsFlight.js";
import { confirmHit, moveAround } from "./controls.js";
import { shotOnTarget } from "./animationsShooting.js";
const dispLevel = document.querySelector(".dispLevel");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const startBtn = document.querySelector(".start");
const startPage = document.querySelector(".startPage");
const frame = document.querySelector(".fr");
const hudinfo2 = document.querySelector(".info2");
const hudinfo1 = document.querySelector(".info1");
const gun = document.querySelectorAll(".gun");
const wrap = document.querySelector(".wrap");

export let pilot = {};

const Pilot = function(level) {
  this.level = level;
  this.numOfTargets = level + 1;
  this.howOftenEnemyShoots = 15 - Math.floor(level / 5);
  this.targetTweenDuration = 2 * (1 - level / 20);
  this.damage = 0;
};

export const start = function() {
  let curLevel = 0;

  increase.addEventListener("click", function() {
    console.log;
    if (curLevel < 100) {
      curLevel++;
      dispLevel.innerText = curLevel;
    }
  });

  decrease.addEventListener("click", function() {
    if (curLevel > 0) {
      curLevel--;
      dispLevel.innerText = curLevel;
    }
  });

  startBtn.addEventListener("click", function() {
    let countDown = 3;

    const time = setInterval(function() {
      if (countDown > 0) {
        startPage.innerHTML = `<strong>${countDown}</strong>`;
        countDown--;
        TweenMax.fromTo("strong", 1, { scale: 0 }, { scale: 1.3 });
      } else {
        clearInterval(time);
        startPage.innerHTML = `<strong>GO !</strong>`;
        const starAnimTl = new TimelineMax();
        starAnimTl.fromTo("strong", 1, { scale: 0 }, { scale: 1 });
        starAnimTl.to(".startPage", 1, {
          opacity: 0,
          onComplete: function() {
            startPage.style.display = "none";
          }
        });
        starAnimTl.to([".cockpittop", ".croshair", ".cockpitbottom"], 1, {
          opacity: 1,
          onComplete: function() {
            pilot = new Pilot(curLevel);
            pilot.levelUpdate();
            wrap.addEventListener("mousemove", moveAround);
          }
        });
      }
    }, 1000);
  });
};

Pilot.prototype.levelUpdate = function() {
  this.numOfTargets = this.level + 1;
  this.howOftenEnemyShoots = 10 - Math.floor(this.level / 5);
  this.targetTweenDuration = 2 * (1 - this.level / 20);
  this.damage = 0;

  document.body.style.cursor = "none";
  gun.forEach(el => (el.style.opacity = 1));

  setInterval(function() {
    wrap.addEventListener("mousemove", moveAround);
  }, 30);
  window.addEventListener("click", confirmHit);
  window.addEventListener("click", shotOnTarget);

  for (let i = 0; i < this.numOfTargets; i++) {
    let newTarget = document.createElement("div");
    newTarget.classList.add(`ball${i}`);
    newTarget.innerHTML = `<div class="enemyGun"></div>`;
    frame.appendChild(newTarget);
    enterOfTarget(
      `${newTarget.className}`,
      this.howOftenEnemyShoots,
      this.targetTweenDuration
    );
  }

  const targetsList = document.querySelectorAll("[class^='ball']");
  hudinfo2.innerText = `targets left ${targetsList.length}`;
  hudinfo1.innerText = `Damage ${pilot.damage}% !`;
};



