# Landing Page Project

## Table of Contents

- [Landing Page Project](#landing-page-project)
  - [Table of Contents](#table-of-contents)
    - [Overview](#overview)
    - [Requirements](#requirements)
    - [Functionality](#functionality)
    - [Helpful Resources](#helpful-resources)

---

### Overview

Hello everyone, this project is about adding dynamic funtionality to a landing page using JavaScript (ES6).

Several functionalities are required. I will discuss each requirement in the [**functionality**](#functionality) section below.

### Requirements

The following table states the required functionalities
| Criteria             | Meets Specifications                                                                               |
|----------------------|----------------------------------------------------------------------------------------------------|
| Navigation           | Navigation is built dynamically as an unordered list.                                              |
| Section Active State | It should be clear which section is being viewed while scrolling through the page.                 |
| Scroll to Anchor     | When clicking an item from the navigation menu, the link should scroll to the appropriate section. |

Furthermore, I have added some convenience features and I am going to tackle each point based on the knowledge that I acquired so far.

### Functionality

1. Added a couple of `<div>` sections to add a logo section to the `navbar__menu` (Only aesctetically pleasing no extra functionality). The *logo* `<div>` section is added dynamically while the rest of the `<ul>` is added to the index.html.

2. The `navbar__menu` is built by two functions, `createMenu()` and `iterateMenuItems()`, the `createMenu()` function will start by adding the logo section then calling the `iterateMenuItems()` to populate the available sections.

3. The `iterateMenuItems()` function will do a `for-of` loop over an `Array` of `sectionNames` creating and appending created *anchors* to `'#navbar__list'` thus creating the menu dynamically. The anchors will handle the *Scroll to Anchor* requirement.

4. Added *Section Active State* functoinality by adding/removing the `class="your-active-class` to the section currently in the viewport. Viewport visibility is determined by two functions - `inViewPort()` and `setActive()`. `setActive()` function will iterate `sections` to check if any is currently near the top of the viewport. This is done by passing each `section of sections` to the `inViewPort()` function which runs the `element.getClientBoundingRect()` method which returns a [`DOMRect`](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect) object providing information about the size of an element and its position relative to the viewport as defined on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).

5. The `app.js` is linked at the end of the index.html

6. createMenu() is called to start populating the navbar and two event listeners are added to handle two main functionalities:
    - adding a new section dynamically on mouse double click.
    - handling the mouse scroll and calling `addNewSection()` which passes newly created element to `addNewSectionToMenu()`.

### Helpful Resources

I looked at the following sources for references and examples

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API)
- [Udacity Classroom](https://classroom.udacity.com)
- [w3schools.com](https://www.w3schools.com/)
- [eloquentjavascript.net](https://eloquentjavascript.net)
