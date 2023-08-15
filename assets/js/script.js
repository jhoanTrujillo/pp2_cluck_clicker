/* ======================================================================================================
* Froggy Clicker is a game inspired by the popular clicker or incremental games genre. 
* The goal is simple: click on elements on the screen to gain points, unlock upgrades, and accumulate 
* as many points as possible to conquer the game. 
* ====================================================================================================== */

/**
 * Function to start game. It is call at the end of the code and waits for DOM to load
 * Before anything starts to work. Ensure all elements needed for the script to work is functional.
 * 
 */
const init = () => {
  /**
 * The clicker class is the main object of the game.
 * The majority of the game logic will be handle by the object
 * 
 * @param {object} clickerElement - Should be given an instance of the element with the clicker ID.
 * @param {object} scoreElement - Should be given an instance of an element with the score ID.
 * @param {object} upgradeList - should be given an instance of getElementsByClass using the upgrade class.
 */
const clicker = class{
  constructor(clickerElement, scoreElement, upgradeList) {
    /* Score tracking variables */
    this.score = 50;
    this.incremental = 1;
    this.goal = 1000000;

    /* Objects holding the upgrade values */
    this.clickUpgradeValues = {
      cost: 25,
      level : 0
    }
    this.timers = [
      {
        title: "timerOne",
        level: 0,
        cost: 50,
        bonus: 0.1,
        isActive : false
      },
      {
        title: "timerTwo",
        level: 0,
        cost: 95,
        bonus: 0.5,
        isActive : false
      },
      {
        title: "timerThree",
        level: 0,
        cost: 145,
        bonus: 1,
        isActive : false
      }
    ]

    /* Variables for score container and clicker element itself */
    this.clickerElement = clickerElement;  
    this.scoreElement = scoreElement;
    this.upgradeList = upgradeList;
  }
  /**
   * adds score value to scoreElement.
   * 
   */
  addScore() {
    this.scoreElement.innerHTML = Math.round((this.score + Number.EPSILON) * 100) / 100;
  }
  /**
   * Increase the score.
   * Calls the add score method.
   * 
   * @param {*} incremental - Should be set to the level of the incremental value in click and to the level value on timer events
   */
  increaseScore(incremental) {
    this.score += incremental;
    this.addScore();
  }
  /**
  * Handles clicks on the HTML element set as the clicker.
  * Calls the increaseScore method. 
  */
  clickCheck() {
    this.clickerElement.addEventListener("click", (e) => {
      e.preventDefault();
      this.increaseScore(this.incremental);
      this.displayIncremental(e, this.clickerElement);
      this.unlockUpgrade();
    });
  }
  /**
   * Adds a span with an animation above the clicker element to display
   * The amount earn by each click 
   * 
   * @param {*} e 
   * @param {*} imageContainer 
   */
  displayIncremental(e, imageContainer) {
    //Object to hold mouse X and Y coordinates
    let mousePosition = {};

    //Create element that will hold the clickpower to display when clicker element is clicked.
    const powerDisplay = document.createElement("div");
    powerDisplay.classList.add("temporary-score-display");
    powerDisplay.classList.add("is-size-1");
    powerDisplay.innerHTML = `${this.incremental}`;

    const frogIcon = document.createElement("img");
    frogIcon.classList.add("frog-icon");
    frogIcon.src = "./assets/images/green_bean_icon.svg";
    powerDisplay.appendChild(frogIcon);

    //Check if the position if the clicker element is clicked or touch if in touchscreen.
    if (e.type === "click") {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
    } else if (e.type === "touchstart") {
      mousePosition.x = e.touches[0].clientX;
      mousePosition.y = e.touches[0].clientY;
    }

    //assigns the position of the mouse or finger touch to powerDisplay
    powerDisplay.style.left = mousePosition.x + "px";
    powerDisplay.style.top = mousePosition.y + "px";

    //gets element holding the clicker element
    let parent = imageContainer;

    //appends the span holding the clickPower variable to the container

    parent.appendChild(powerDisplay);
    powerDisplay.addEventListener("animationend", () => {
      powerDisplay.remove();
    });
    
  }
  /**
   * Method that assigns an event listener to all upgrade boxes.
   * It should be call individually from the click event since
   * the method will check for clicks on different elements.
   */
  upgradeCheck(e) {
    //Loop through the upgrade boxes and add different functionality
    for(let upgrade of this.upgradeList) {
      upgrade.addEventListener("click", (e) => {
        e.preventDefault();

        //Use the event to target the upgrade-type data attribue of the element.
        let upgradeType = e.currentTarget.dataset.upgradeType;

        //check for upgrade type to start logic
        if (upgradeType === "click") {
          this.increaseClickPower()
        } else if (upgradeType === "timer") {
          this.upgradeTimers(e)
        }    
      });
    };
  }
  /**
   * Calculate cost, level and details of the clickUpgradeValues.
   * Adds level and cost to html element.
   */
  increaseClickPower() {
    let score = this.score;
    let clickUpgrade = this.clickUpgradeValues
    //Check if score is enough to upgrade and adjust level, cost and score numbers. 
    if (score >= clickUpgrade.cost) {
      clickUpgrade.level += 1;
      this.score -= clickUpgrade.cost;
      this.incremental += 1;
      this.upgradeCostCalculator(clickUpgrade)
      //Add new values to the html element holding click upgrade data.
      document.getElementById("clickLevel").innerHTML = clickUpgrade.level;
      document.getElementById("clickUpgradeCost").innerHTML = clickUpgrade.cost ;
      this.addScore();
    } else {
      alert("Not enough flies!")
    }
  }
  /**
   * On click checks if the cost of an upgrade was met by the score
   * If so, unlocks display the new upgrade in the page.
   */
  unlockUpgrade() {
    //Loops over the timersData array and then check on the upgradeList value of the class
    //Then if the titles match it removes the is-hidden class and display the object
    for (let timer of this.timers) {
      if (this.score >= timer.cost && timer.isActive != true) {
        const target = document.querySelector(`li[data-title="${timer.title}"]`);
        target.classList.remove("is-hidden");
      }
    };
  }
  /**
   * Takes the value of any upgrade clicked and implement logic 
   * to calculate the new cost of the upgrade.
   * 
   * @param {*} upgradeObjectToCalculate - the object should have a level and cost value
   */
  upgradeCostCalculator(upgradeObjectToCalculate) {
    if (upgradeObjectToCalculate.level < 3 ) {
      const lowerLevelCost =  Math.floor(upgradeObjectToCalculate.cost * 1.5);
       upgradeObjectToCalculate.cost = lowerLevelCost;
    } else {
      const higherLevels = Math.floor((upgradeObjectToCalculate.cost + 25) * 1.5);
      upgradeObjectToCalculate.cost = higherLevels;
    }
  }
  /**
   * function that handleS all time based upgrades.
   * 
   * @param {*} elementToUpgrade - represents the event from an event listener in the upgradeCheck method
   */
  upgradeTimers(elementToUpgrade) {
    let timer = elementToUpgrade.currentTarget;
    
    //Checks for the titles of the element and array of timer data to match
    //then it will upgrade that specific object in the array 
    for (let timerData of this.timers) {
      if (timer.dataset.title === timerData.title) {
        this.updateTimersDataValues(timer, timerData);
      };
    };
  }
  /**
   * Takes the timer object assign to an array position in the class. 
   * Update the parameters if the value of the score inside the class is higher than the cost 
   * of the upgrade. Lastly, it addes the changes to the element that was clicked.
   * 
   * @param {*} timerObject 
   */
  updateTimersDataValues(timerElement, valueFromTimersDataArray) {
    //Check if score is enough to purchase upgrade. If not, push message.
    if (this.score <  valueFromTimersDataArray.cost) {
      alert("insuficient Points");
      return;
    }

    if (valueFromTimersDataArray.isActive != true) {
      valueFromTimersDataArray.isActive = true;
      timerElement.dataset.isActive = valueFromTimersDataArray.isActive;
      this.setTimerIncrement(valueFromTimersDataArray);
    } 

    this.updateUpgradeValues(valueFromTimersDataArray);
    valueFromTimersDataArray.bonus += 0.1;
  }
  /**
   * Update the values of a timer
   * 
   * @param {*} timerObject - An object with a level and cost value.
   */
  updateUpgradeValues(timerObject) {
    timerObject.level += 1;
    console.log("Reduce score by: ", timerObject.cost);
    this.score -= timerObject.cost;
    this.scoreElement.innerHTML = this.score;

    this.upgradeCostCalculator(timerObject);

    const id = this.idBuilder(timerObject);

    //Adds values to the generated IDs
    document.getElementById(id[0]).innerText = `${timerObject.level}`;
    document.getElementById(id[1]).innerText = `${timerObject.cost}`;
  }
  /**
   * Builds the ID needed 
   * @param {*} timerObjectReference 
   * @returns - an array with the following result 0 : level display id, 1 : cost display id.
   */
  idBuilder(timerObjectReference) {
    //Builds a ID to later change the value that goes inside the array. 
    const id = `${timerObjectReference.title}`;
    const idLevel = id + "Level";
    const idCost = id + "Cost";

    return [idLevel, idCost];
  }
  setTimerIncrement(timerObject) {
    if (timerObject.isActive) {
      const incremental = timerObject.bonus;
      const scoreElement = this.scoreElement; // Assuming you have defined scoreElement somewhere
      
      const updateScore = () => {
        this.score += incremental;
        this.score = Math.round((this.score + Number.EPSILON) * 100) / 100;
        scoreElement.innerHTML = this.score;
        setTimeout(updateScore, 1000); // Call the function again after 1000ms (1 second)
      };
  
      setTimeout(updateScore, 1000); // Initial call to start the process
    }
  }  
}

document.addEventListener("DOMContentLoaded", () => {
  /* Variables holding the click elements and score element for the clicker class */
  const clickerElement = document.getElementById("clicker");
  const scoreElement = document.getElementById("score");
  const upgradeList = document.querySelectorAll(".upgrade")

  /* Created new clicker object */
  let froggyClicker = new clicker(clickerElement, scoreElement, upgradeList);

  /* Class method calls - hover over method for doctype explanation*/

  froggyClicker.clickCheck();
  froggyClicker.upgradeCheck();
  });
}

init();