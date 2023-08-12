/* ======================================================================================================
* Froggy Clicker is a game inspired by the popular clicker or incremental games genre. 
* The goal is simple: click on elements on the screen to gain points, unlock upgrades, and accumulate 
* as many points as possible to conquer the game. 
* ====================================================================================================== */

/**
 * The clicker class is the main object of the game.
 * The majority of the game logic will be handle by the object
 * 
 * @param {object} clickerElement - refers to the html element that will be click
 * @param {object} scoreElement - refers to the html element that will display the score
 */
const clicker = class{
  constructor(clickerElement, scoreElement) {
    /* Score tracking variables */
    this.score = 0;
    this.incremental = 1;
    this.bonus = 0;
    this.goal = 1000000;

    /* Objects holding the upgrade values */
    this.clickUpgradeObject = {
      cost: 25,
      level : 0
    }

    /* Variables for score container and clicker element itself */
    this.clickerElement = clickerElement;  
    this.scoreElement = scoreElement;
  }
  /**
   * adds score value to scoreElement
   */
  addScore() {
    this.scoreElement.innerHTML = this.score;
  }
  /**
   * Increase score when clicker
   */
  scoreIncreaseClick() {
    this.score += this.incremental + this.bonus;
  }
  /**
  * Method that handles the click functionality on main HTML element.
  * It increase the score and add the score to the scoreElement. 
  */
  clickEvent() {
    this.clickerElement.addEventListener("click", (e) => {
      e.preventDefault();
      this.scoreIncreaseClick();
      this.displayIncremental(e, this.clickerElement);
      this.addScore();
      this.upgradeUnlockChecker();
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
    let powerDisplay = document.createElement("span");
    powerDisplay.classList.add("temporary-score-display");
    powerDisplay.classList.add("is-size-2");
    powerDisplay.innerHTML = `+ ${this.incremental + this.bonus}`;

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
  upgradeEvent() {
    //Targets the element holding all the upgrade boxes
    let upgradeList = document.getElementsByClassName("upgrade");

    //Loop through the upgrade boxes and add different functionality
    for(let upgrade of upgradeList) {
      upgrade.addEventListener("click", (e) => {
        e.preventDefault();

        //Use the event to target the upgrade-type data attribue of the element.
        let upgradeType = e.currentTarget.dataset.upgradeType;
        //check for upgrade type to start logic
        if (upgradeType === "click") {
          this.increaseClickPower()
        } else if (upgradeType === "timer") {
          this.timerEventUpgrade(e)
        }    
      });
    };
  }
  /**
   * Calculate cost, level and details of the clickUpgradeObject.
   * Adds level and cost to html element.
   */
  increaseClickPower() {
    let score = this.score;
    let clickUpgrade = this.clickUpgradeObject
    //Check if score is enough to upgrade and adjust level, cost and score numbers. 
    if (score >= clickUpgrade.cost) {
      clickUpgrade.level += 1;
      this.score -= clickUpgrade.cost;
      this.bonus = clickUpgrade.level;
      clickUpgrade.level < 3 ? clickUpgrade.cost *= 2: clickUpgrade.cost = (clickUpgrade.cost + 100) * 2 ;
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
  upgradeUnlockChecker() {
    let upgradeList = document.getElementsByClassName("upgrade");

    for (let upgrade of upgradeList) {
      if ( this.score >= upgrade.dataset.upgradeCost ) {
        upgrade.classList.remove("is-hidden");
      }
    }

  }
  /**
   * Will read the cost of the event
   * 
   * @param {*} upgradeElement - represents the event from an event listener in the upgradeEvent method
   */
  IncreaseTimerUpgradeLevel(upgradeElement) {
    
  }
  
}

/**
 * Starts the game. Make sures the document is ready and content loaded before starting
 */
const init = () => {

  document.addEventListener("DOMContentLoaded", () => {
    /* Variables holding the click elements and score element for the clicker class */
    let clickerElement = document.getElementById("clicker");
    let scoreElement = document.getElementById("score");

    /* Created new clicker object */
    let froggyClicker = new clicker(clickerElement, scoreElement);

    /* Class method calls - hover over method for doctype explanation*/

    froggyClicker.clickEvent();
    froggyClicker.upgradeEvent();
    });
}


init();