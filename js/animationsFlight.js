import { enemyShot } from "./animationsEnemyShooting.js";


// opis ruchu statku po pojawieniu się na ekranie
const targetMovement = function(
  targetClass,
  targetTweenDuration,
  xdirection,
  ydirection,
  howOftenEnemyShoots
) {
  tl = new TimelineMax({ repeat: 1000, yoyo: `${Math.random() > 0.5}` });
  

  // let ease = "Back.easeOut.config(3)"; // bounce
  // let ease1 = "Power4.easeOut";
   let ease2 = "Elastic.easeInOut.config(1, 0.3)"; // elastic

  let count = parseInt(targetClass.replace("ball", ""));
  

  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration}`,
    { x: 0, y: 0 },
    {
      x: 1000 * `${xdirection}`,
      y: 0,
      ease: `${ease2}`,
      onComplete: function() {
        count++;
        enemyShot(targetClass, howOftenEnemyShoots, count);
      },
      onReverseComplete: function() {
        count++;
        enemyShot(targetClass, howOftenEnemyShoots, count);
      }
    }
  );

  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration / 2}`,
    { rotation: 0 },
    { rotation: 30 * `${xdirection}` },
    `-=${targetTweenDuration}`
  );
  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration / 2}`,
    { rotation: 30 * `${xdirection}` },
    { rotation: 0 },
    `-=${targetTweenDuration / 2}`
  );

  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration}`,
    { x: 1000 * `${xdirection}` },
    {
      x: 0,
      y: 0,
      ease: `${ease2}`,
      onComplete: function() {
        count++;
        enemyShot(targetClass, howOftenEnemyShoots, count);
      },
      onReverseComplete: function() {
        count++;
        enemyShot(targetClass, howOftenEnemyShoots, count);
      }
    }
  );

  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration / 2}`,
    { rotation: 0 },
    { rotation: -30 * `${xdirection}` },
    `-=${targetTweenDuration}`
  );
  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration / 2}`,
    { rotation: -30 * `${xdirection}` },
    { rotation: 0 },
    `-=${targetTweenDuration / 2}`
  );

  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration / 2}`,
    { x: 0, y: 0 },
    {
      x: 0,
      y: 400 * `${ydirection}`,
      ease: `${ease2}`,
      onComplete: function() {
        count++;
        enemyShot(targetClass, howOftenEnemyShoots, count);
      },
      onReverseComplete: function() {
        count++;
        enemyShot(targetClass, howOftenEnemyShoots, count);
      }
    }
  );

  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration}`,
    { x: 0, y: 400 * `${ydirection}` },
    {
      x: 1000 * `${xdirection}`,
      y: 400 * `${ydirection}`,
      ease: `${ease2}`,
      onComplete: function() {
        count++;
        enemyShot(targetClass,howOftenEnemyShoots, count);
      },
      onReverseComplete: function() {
        count++;
        enemyShot(targetClass,howOftenEnemyShoots, count);
      }
    }
  );
  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration / 2}`,
    { rotation: 0 },
    { rotation: 30 * `${xdirection}` },
    `-=${targetTweenDuration}`
  );
  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration / 2}`,
    { rotation: 30 * `${xdirection}` },
    { rotation: 0 },
    `-=${targetTweenDuration / 2}`
  );

  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration}`,
    { x: 1000 * `${xdirection}`, y: 400 * `${ydirection}` },
    {
      x: 0,
      y: 400 * `${ydirection}`,
      ease: `${ease2}`,
      onComplete: function() {
        count++;
        enemyShot(targetClass,howOftenEnemyShoots, count);
      },
      onReverseComplete: function() {
        count++;
        enemyShot(targetClass,howOftenEnemyShoots, count);
      }
    }
  );

  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration / 2}`,
    { rotation: 0 },
    { rotation: -30 * `${xdirection}` },
    `-=${targetTweenDuration}`
  );
  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration / 2}`,
    { rotation: -30 * `${xdirection}` },
    { rotation: 0 },
    `-=${targetTweenDuration / 2}`
  );

  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration / 2}`,
    { x: 0, y: 400 * `${ydirection}` },
    {
      x: 0,
      y: 0,
      ease: `${ease2}`,
      onComplete: function() {
        count++;
        enemyShot(targetClass,howOftenEnemyShoots, count);
      },
      onReverseComplete: function() {
        count++;
        enemyShot(targetClass,howOftenEnemyShoots, count);
      }
    }
  );

  // dodtkowa faza lotu po skosie

  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration}`,
    { x: 0, y: 0 },
    {
      x: 1000 * `${xdirection}`,
      y: 400 * `${ydirection}`,
      ease: `${ease2}`,
      onComplete: function() {
        count++;
        enemyShot(targetClass,howOftenEnemyShoots, count);
      },
      onReverseComplete: function() {
        count++;
        enemyShot(targetClass,howOftenEnemyShoots, count);
      }
    }
  );

  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration / 2}`,
    { rotation: 0 },
    { rotation: 30 * `${xdirection}` },
    `-=${targetTweenDuration}`
  );
  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration / 2}`,
    { rotation: 30 * `${xdirection}` },
    { rotation: 0 },
    `-=${targetTweenDuration / 2}`
  );

  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration}`,
    { x: 1000 * `${xdirection}`, y: 400 * `${ydirection}` },
    {
      x: 1000 * `${xdirection}`,
      y: 0,
      ease: `${ease2}`,
      onComplete: function() {
        count++;
        enemyShot(targetClass,howOftenEnemyShoots, count);
      },
      onReverseComplete: function() {
        count++;
        enemyShot(targetClass,howOftenEnemyShoots, count);
      }
    }
  );

  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration}`,
    { x: 1000 * `${xdirection}`, y: 0 },
    {
      x: 0,
      y: 400 * `${ydirection}`,
      ease: `${ease2}`,
      onComplete: function() {
        count++;
        enemyShot(targetClass,howOftenEnemyShoots, count);
      },
      onReverseComplete: function() {
        count++;
        enemyShot(targetClass,howOftenEnemyShoots, count);
      }
    }
  );

  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration / 2}`,
    { rotation: 0 },
    { rotation: -30 * `${xdirection}` },
    `-=${targetTweenDuration}`
  );
  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration / 2}`,
    { rotation: -30 * `${xdirection}` },
    { rotation: 0 },
    `-=${targetTweenDuration / 2}`
  );

  tl.fromTo(
    `.${targetClass}`,
    `${targetTweenDuration}`,
    { x: 0, y: 400 * `${ydirection}` },
    {
      x: 0,
      y: 0,
      ease: `${ease2}`,
      onComplete: function() {
        count++;
        enemyShot(targetClass,howOftenEnemyShoots, count);
      },
      onReverseComplete: function() {
        count++;
        enemyShot(targetClass,howOftenEnemyShoots, count);
      }
    }
  );
};

export const enterOfTarget = function(
  targetClass,
  howOftenEnemyShoots,
  targetTweenDuration
) {
  
  const enemyElement = document.querySelector(`.${targetClass}`);

  enemyElement.style.opacity = 1;

  const randNum = function(val) {
    let x = Math.random() > 0.49 ? 1 : -1;
    return Math.random() * val * x;
  };

  const leftHalfPosition = function(elem) {
    let x = elem.offsetLeft > elem.offsetParent.clientWidth / 2 ? false : true;
    // console.log("left",x);
    return x;
  };
  const topHalfPosition = function(elem) {
    let x = elem.offsetTop < elem.offsetParent.clientHeight / 2 ? true : false;
    // console.log("top", x)
    return x;
  };

  const targetEntranceSpeed = 4;
  // czas pomiędzy zmianami w animacji ruchu samolotu przeciwnika

  function enemyStartPosition(enemyElement) {
    enemyElement.style.transform = "scale(0.01)";
    let randX = Math.floor(Math.random() * 170);
    let randY = Math.floor(Math.random() * 100);
    enemyElement.style.left = `${Math.random() > 0.5 ? -randX : 100 + randX}%`;
    enemyElement.style.top = `${Math.random() > 0.5 ? -randY : 100 + randY}%`;
  }
  enemyStartPosition(enemyElement);

  TweenMax.to(`.${targetClass}`, `${targetEntranceSpeed}`, {
    top: `${randNum(50) + 50}%`,
    left: `${randNum(50) + 50}%`,
    scale: 1.2,
    ease: Back.easeOut.config(3),
    onComplete: function() {
      // targetInSight = true;
      // document.querySelector(`.${targetClass}`).style.backgroundImage =
      //   "url('./img/tiec.svg')"; rozycie samolotu zanim doleci

      let xdirection = leftHalfPosition(enemyElement) ? 1 : -1;
      let ydirection = topHalfPosition(enemyElement) ? 1 : -1;

      targetMovement(
        targetClass,
        targetTweenDuration,
        xdirection,
        ydirection,
        howOftenEnemyShoots
      );
    }
  });
};

export let tl;
