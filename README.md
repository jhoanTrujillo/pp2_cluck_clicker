# Froggy Clicker
Developer: Jhoan Trujillo 

![Responsive test image for the website goes here](https://jhoantrujillo.github.io/pp2_froggy_clicker/readme_images/mockup_image.png)

[Link to deploy version]( https://jhoantrujillo.github.io/pp2_froggy_clicker/).

## Introduction 

Froggy Clicker is a game inspired by the popular clicker or incremental games genre. The goal is simple: click on image on the screen to gain points, unlock upgrades, and accumulate as points to help the little frog reach its first million. 

My personal goal for this project is to create a clicker game framework that anybody can easily copy and utilize. At the moment, the code is also

## Table Of Content

1. UX/UI
  - Wireframe
  - User Stories
2. Techonologies
  - Languages
  - Frameworks  
3. Testing
4. Resources

## 1. UX/UI

### Wireframe

The game was inspired by another famous incremental game called cookie clicker, although my project still has work to become a fully fleshout game the layout is functional and provides an easily digested game experience. The original design change at the end from the originally planned design after getting feedback from user testing. 

#### Desktop
![Wireframe of app in desktop](https://jhoantrujillo.github.io/pp2_froggy_clicker/readme_images/Wireframe_desktop.png)


#### Mobile
![Wireframe of app in mobile](https://jhoantrujillo.github.io/pp2_froggy_clicker/readme_images/Wireframe_mobile.png)


### User Stories
Below you can find some of the user stories I thought off when starting to work in the game and some of the users that might be interested in playing.

**User Story 1:**
As a stressed-out college student, I want to play a clicker game during my study breaks so that I can relax and unwind for a few minutes. The simple and repetitive gameplay helps me take my mind off the complex assignments and exams, allowing me to return to my studies with renewed focus and reduced anxiety.

**User Story 2:**
As a commuter on long train rides, I want to play a clicker game on my smartphone to make my daily commutes more enjoyable. With limited internet connectivity, I can pass the time and have fun even when I'm without a stable network connection. The gradual progression and rewards keep me engaged and excited throughout my journeys.

**User Story 3:**
As a competitive individual, I want to play a clicker game that offers leaderboard functionality so that I can compete with my friends and prove my tapping skills. Participating in friendly competitions and comparing my progress with others adds an extra layer of motivation and excitement to the game. The constant drive to climb the leaderboards and outperform my peers keeps me coming back for more clicks.

## 2. Technologies

Below you can see more context regarding languages and frameworks used. 

#### Languages

This project uses three languages. The data/score of the game gets handle via Javascript which can have issues with performances as the game progresses pass the 1 million mark, but based in the scope of the project there doesn't seem to be any issues handling the amounts of information that the game is managing.

- HTML
- CSS
- Javascript

#### Frameworks

- [Bulma CSS](https://bulma.io/) - A modern open source css framework.

## 3. Testing

### Lighthouse performance

Lighthouse was a crucial tool for ensuring the optimal performance of the project. Initial testing revealed that the mobile loading speed had a rating of 82, which isn't bad. However, it indicated that performance could be further optimized for mobile devices. By implementing various recommendations from Lighthouse, such as adding a srcset attribute to the main image used in the game, I was able to improve mobile performance to 92 points. In contrast, desktop performance has consistently remained at a solid 97 points throughout the development process.

### Desktop performance
![lighthouse performance image desktop](https://jhoantrujillo.github.io/pp2_froggy_clicker/readme_images/lighthouse_desktop.png)

### Mobile performance
![lighthouse performance image Mobile](https://jhoantrujillo.github.io/pp2_froggy_clicker/readme_images/lighthouse_mobile.png)

## 4. Resources 

A list of external resources such as codepen, images, and the likes: 

1. [Background gradient animation by Manuel Pinto](https://codepen.io/P1N2O/pen/pyBNzX) 
2. [Glass CSS - Tool to preview and quickly generate glass looking css backgrounds by Mike Tromba](https://css.glass/)
