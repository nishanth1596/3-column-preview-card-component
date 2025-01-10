# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Features](#Features)
  - [Installation](#Installation)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![Mobile view](./screenshot.png)
![Desktop view](./screenshot1.png)

### Links

- Solution URL: [Solution URL](https://github.com/nishanth1596/3-column-preview-card-component)
- Live Site URL: [Live site URL]()

### Features

- **Responsive Design**: The card layout adapts seamlessly from mobile to desktop view.
- **Dynamic Content**: Components are reusable, making it easy to extend the functionality or update the content.

### Installation

To run this project locally:

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/order-summary-card.git
   ```

2. Navigate into the project directory:
   cd order-summary-card

3. Install dependencies:
   npm install

4. Start the development server:
   npm start

5. Open the project in your browser at http://localhost:3000.

## Usage

- This project is a simple Stats preview card component that can be integrated into any e-commerce or subscription platform.

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learned how to dynamically pass CSS properties as props in React to design elements like background color and text color. For example, I used code like this:

```
 style={{ "--bg-color": item.bgColor }}
```

In the CSS, I referenced the custom property to dynamically change styles:

```
 .link:hover {
  cursor: pointer;
  box-shadow: inset 0 0 0 2px white;
  color: #ffffff;
  background-color: var(--bg-color);
}

```

### Continued development

I would also like to continue practicing more complex layout techniques, especially working with Flexbox and Grid

### Useful resources

MDN Web Docs - Flexbox and Grid - This documentation helped me understand Flexbox better.
Google Fonts - I used the Lexend Deca and Big Shoulders Display font from Google Fonts to style the text.

### Author

- Name: Nishanth
- Website - [My GitHub Profile](https://github.com/nishanth1596)
- Frontend Mentor - [@nishanth1596](https://www.frontendmentor.io/profile/nishanth1596)
- Twitter - [@nishanth1596](https://x.com/nishanth1596)

### Acknowledgments

A special thanks to the Frontend Mentor community for providing inspiration and feedback on this project. The resources provided by the platform were very helpful in getting me to the solution.
