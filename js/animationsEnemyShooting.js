import { pilot, start } from "./startPage.js";
const hudinfo1 = document.querySelector(".info1");
const startPage = document.querySelector(".startPage");
import {Sound} from "./sounds.js"

export let enemyShootingTl = new TimelineMax({ ease: Power0.easeNone });

export const enemyShot = function(targetClass, howOftenEnemyShoots, count) {
  if (count % howOftenEnemyShoots === 0 && count >= howOftenEnemyShoots) {
    //  console.log("był strzał przy count = ",targetClass, pilot.damage +"% ");
    const enemyGun = document.querySelector(`.${targetClass} div`);
    enemyGun.style.opacity = 1;
    let shootSound = new Sound("enemyShoot.wav");
    shootSound.play();

    pilot.damage++;
    hudinfo1.innerText = `Damage ${pilot.damage}0% !`;

    enemyShootingTl.to(enemyGun, 0.4, {
      scale: 60,
      onComplete: function() {
        TweenMax.set(enemyGun, { clearProps: "all" });
      }
    });
    enemyShootingTl.from(".wrap", 0.1, {
      backgroundColor: `rgba(238, 56, 50, 0.185)`,
      onComplete: function() {
        TweenMax.set(".wrap", { clearProps: "all" }, "-=0.1");
      }
    });
    if (pilot.damage === 10) {
      TweenMax.killAll();
      startPage.style.display = "flex";
      startPage.style.opacity = 1;
      startPage.innerHTML = `<strong>GAME OVER !</strong>`;
      TweenMax.fromTo(
        "strong",
        8,
        { scale: 0 },
        {
          scale: 1.1,
          onComplete: function() {
            startPage.style.display = "none";
            document.location.reload();
          }
        }
      );
    }
  }
};
