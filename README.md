# Froggy Clicker
Developer: Jhoan Trujillo 

![Responsive test image for the website goes here](https://jhoantrujillo.github.io/pp2_froggy_clicker/readme_images/mockup_image.png)

[Link to deploy version]( https://jhoantrujillo.github.io/pp2_froggy_clicker/)

## Table Of Content

1. Introduction
2. UX
  - Ideal User Demographic 
  - User Stories
  - Development Planes
  - Design
3. Features
  - Design Features
  - Existing Features
  - Features to Implement in the future
4. Issues and Bugs
5. Technologies Used
  - Main Languages Used
  - Frameworks, Libraries & Programs Used
6. Testing
  - Testing User Stories
  - Manual Testing
  - Automated Testing
    - Code Validation
    - Browser Validation
    - Lighthouse Test
  - User Testing
7. Deployment
  - Deploying on GitHub Pages
8. Resources



## 1. Introduction 

"Froggy Clicker" is a game that draws inspiration from the popular clicker or incremental game genre. The objective is straightforward: click on the image displayed on the screen to earn points, unlock upgrades, and amass as many points as possible to assist the little frog in reaching its first million.

As for my personal aspiration with this project, I aim to gradually develop a clicker framework that can be effortlessly utilized by any user to create a clicker game with minimal initial setup. This endeavor will evolve over time, and I intend for the code to be reusable as opportunities arise in the future.

Note: I will try my best to keep the project based on JS in the future, as a fun side project.

[⬆ back to top](#froggy-clicker)

## 2. UX

### Ideal Use Demographic

The ideal user for this website is:

- New gaming
- Casual Gamers
- Gaming enthusiast

In the future as more changes and additional features are added to the game such as achievements and other such functions, it should become more welcoming to more hardcore/dedicated players.

### User Stories

Below you can find some of the user stories I thought off when starting to work in the game and some of the users that might be interested in playing.

**User Story 1:**
As a stressed-out college student, I want to play a clicker game during my study breaks so that I can relax and unwind for a few minutes. The simple and repetitive gameplay helps me take my mind off the complex assignments and exams, allowing me to return to my studies with renewed focus and reduced anxiety.

**User Story 2:**
As a commuter on long train rides, I want to play a clicker game on my smartphone to make my daily commutes more enjoyable. With limited internet connectivity, I can pass the time and have fun even when I'm without a stable network connection. The gradual progression and rewards keep me engaged and excited throughout my journeys.

#### New User Goals

1. As a new user, I want to navigate the site intuitively.
2. As a new user, I want the instructions to be easily found, clear and concise.
3. As a new user, I want an entertaining and engaging game loop.

#### Current user

1. As a current user, I want to have fun and engaging game loop.
2. As a current user, I want to have an easy to process game loop.
3. As a current user, I want to be able to keep my progress if I leave the page.

### Development Planes



### Design

The design inspiration for the game was taken from mid 2000s famous clicker games such as cookie clicker. The layout is made to inspire a more comforting and calming feeling of course. The decision of using the Bulma framework for CSS seemed like a natural decision as the colors, and minimalistic elements used in the framework compliment a more simple and minimalistic look. 

#### Color Scheme



#### Typography

To maintain the text readable and engaging I decided to use 

#### Desktop

The initial idea of the wireframe was to create a easy interface that would showcase all elements needed to play in one screen. All elements are display in plain view. 

![Wireframe of app in desktop](https://jhoantrujillo.github.io/pp2_froggy_clicker/readme_images/Wireframe_desktop.png)


#### Mobile


![Wireframe of app in mobile](https://jhoantrujillo.github.io/pp2_froggy_clicker/readme_images/Wireframe_mobile.png)


### User Stories


## 2. Technologies Used



#### Languages Used

- **HTML**
- **CSS**
- **Javascript**

#### Frameworks, Libraries & Programs Used

- [Bulma CSS](https://bulma.io/) - A modern open source css framework.

## 6. Testing

### Testing User Stories

#### Current User Goals

**New User Goals:**

1. **As a new user, I want to easily navigate the site intuitively:**
   - The site is focused and centered around the game loop. The main page is dedicated entirely to the game and is designed to be easily comprehensible.
   - The options available for accessing other menu items are straightforward to understand.
2. **As a new user, I want the instructions to be easily found, clear, and concise.**
   - The game rules are simple and easily located within the menu.
   - The rules are presented in a modal on the main page.
3. **As a new user, I want attractive and relevant visuals and color schemes that complement the content.**
   - The site features a relaxing, neutral color scheme throughout.
   - Users can select a theme when starting a new game.
   - The chosen theme influences the colors of the header, footer, and body of the page, depending on the selected option.

**Current User**

1. **As a current user, I want to have a fun and engaging game loop.**
   - The game offers simplicity, enjoyment, and engagement, along with periodic updates to keep the experience fresh.
   - Both auditory and visual feedback contribute to maintaining the user's engagement.
2. **As a current user, I want to have an easy-to-understand game loop.**
   - The straightforward feedback loop and game mechanics ensure that the game is exceptionally easy to pick up and play.
3. **As a current user, I want to be able to retain my progress even when I leave the page.**
   - To ensure that users can resume playing upon returning, local storage is utilized to store values and facilitate continuity.

[⬆ back to top](#froggy-clicker)

### Manual Testing

### Automated Testing

#### Code Validation 

The following tools were use to validate and automated the JS code and HTML, CSS.

- [JShint](https://jshint.com/) - was used to validate the JS code.
- [Markup Validation Service](https://validator.w3.org/) - Was used to validate CSS and HTML.

#### Browser Validation

- Chrome Testing - [Image](https://jhoantrujillo.github.io/pp2_froggy_clicker/readme_images/chrome_test.png)
- Opera Testing - [Image](https://jhoantrujillo.github.io/pp2_froggy_clicker/readme_images/opera_test.png)

#### Lighthouse Test

**Lighthouse performance**

[Lighthouse](https://pagespeed.web.dev/) was a crucial tool for ensuring the optimal performance of the project. Initial testing revealed that the mobile loading speed had a rating of 82, which isn't bad. However, it indicated that performance could bew further optimized for mobile devices. By implementing various recommendations from Lighthouse, such as adding a srcset attribute to the main image used in the game, I was able to improve mobile performance to 92 points. In contrast, desktop performance has consistently remained at a solid 97 points throughout the development process.

#### Desktop performance
![lighthouse performance image desktop](https://jhoantrujillo.github.io/pp2_froggy_clicker/readme_images/lighthouse_desktop.png)

#### Mobile performance
![lighthouse performance image Mobile](https://jhoantrujillo.github.io/pp2_froggy_clicker/readme_images/lighthouse_mobile.png)

### User Testing

The project was shared with a wide array of game enthusiast and casual players. 

## 7. Deployment

The project was developed using VS Code and committed on a regular basis to GitHub.

### Deploying on GitHub Pages

To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:

- Log into [GitHub](https://github.com/) or [create an account](https://github.com/join).
- Locate the [GitHub Repository](https://github.com/jhoanTrujillo/pp2_froggy_clicker).
- At the top of the repository, select Settings from the menu items.
- Scroll down the Settings page to the "Pages" section.
- Under "Source" click the drop-down menu labelled "None" and select "Main".
- Upon selection, the page will automatically refresh meaning that the website is now deployed.
- Scroll back down to the "Pages" section to retrieve the deployed link.

## 8. Resources 

A list of external resources that were use for the creation and testing of this project: 

1. [Background gradient animation by Manuel Pinto](https://codepen.io/P1N2O/pen/pyBNzX) 
2. [Glass CSS - Tool to preview and quickly generate glass looking css backgrounds by Mike Tromba](https://css.glass/)
3. [lighthouse](https://pagespeed.web.dev/)
4. [JShint](https://jshint.com/)

