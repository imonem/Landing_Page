/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/
/**
 * Define Global Variables
 *
*/
let sectionNames = Array.from(document.querySelectorAll('[data-nav]')); //populate current sectionNames from data-nav
let sections = document.querySelectorAll('section');
let sectionCount = sectionNames.length; //adding new section-on-dblclick functionality
let lastSection = sectionNames[sectionCount-1]; //adding new section-on-dblclick functionality
// console.log(sectionsNames);


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
const createMenu = () => {
    /**adding a logo to the landing page, aestheitically pleasing */
    const nav = document.querySelector(".navbar__menu");
    /**creating a div as a logo container */
    const logo = document.createElement("div");
    /**adding classes for logo */
    logo.className = ("logo navbar__menu");
    /**logo is text `The Landing` */
    const logo_text = document.createTextNode("The Landing");
    logo.appendChild(logo_text);
    /** end log creation and start populating sections */
    nav.prepend(logo);
    iterateMenuItems();
};

const iterateMenuItems = () => {
    /**iterating through all defined menu items */
    for (let sectionName of sectionNames) {
        /**create li element tag for each element in menu */
        let currentMenuItem = document.createElement("li");
        /**create innerHTML for anchor item */
        currentMenuItem.innerHTML = `<a class="menu__link" href="#${sectionName.id}">${sectionName.dataset.nav}</a>`;
        /**append child to menu */
        document.querySelector('#navbar__list').appendChild(currentMenuItem);
    }
};

/**get client rectangle to check if in viewport later */
const inViewPort = (element) => {
    return (element.getBoundingClientRect().top);
};

const setActive = () => {
    /**loop to go through sections to check if client rectangle is in viewport */
    for (let section of sections) {
        /**add activeclass if in view port else remove */
        if (inViewPort(section) < 320 && inViewPort(section) >= -320) {
            section.classList.add(`your-active-class`);
        } else {
            section.classList.remove(`your-active-class`);
        }
    }
};

/** adding section after page has loaded using an event listener on dblclick!  */
const addNewSection = () => {
    let container = document.querySelector("main");
    newSection = document.createElement("section");
    /**creating an element by copying an existing element as an example to dynamic content*/
    newSection.innerHTML = lastSection.innerHTML;
    /**prepare new section and increment Section ID and data- field */
    newSection.id = `section${(sectionCount+1)}`;
    newSection.dataset.nav = `Section ${(sectionCount+1)}`;
    let sectionDiv = newSection.firstElementChild;
    let sectionHeader = sectionDiv.firstElementChild;
    sectionHeader.innerText = newSection.dataset.nav;
    container.appendChild(newSection);
    sectionNames.push(newSection.dataset.nav); //update sectionNames with newly added section
    sectionCount += 1; //increment section count
    sections = document.querySelectorAll('section'); //update sections for continued setActive() functionality
    addNewSectionToMenu(newSection);
};

/** Appending dynamically added sections to menu */
const addNewSectionToMenu = (newSection) => {
    let newSectionMenuItem = document.createElement("li");
    newSectionMenuItem.innerHTML = `<a class="menu__link" href="#${newSection.id}">${newSection.dataset.nav}</a>`;
    // newSectionMenuItem.textContent = newSection.dataset.nav;
    // newSectionMenuItem.className = 'menu__link';
    document.querySelector('#navbar__list').append(newSectionMenuItem);
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

createMenu();

//dynamically adding new section-on-dblclick functionality
document.addEventListener('dblclick', addNewSection);


// Add class 'active' to section when near top of viewport (passive gives better performance)
document.addEventListener('scroll', setActive, {passive: true, capture: true});




// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
