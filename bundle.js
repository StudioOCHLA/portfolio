// TABLE OF CONTENT:
// HAMBURGER MENU
// ARROW BUTTON
// 
// 




// HAMBURGER MENU
const menuOpenIcon = document.querySelector(".hamburger-icon");
const sideMenuCloseIcon = document.querySelector(".hamburger-icon-close");
const openIconTop = document.querySelector(".hamburger-icon div:first-of-type");
const openIconBottom = document.querySelector(
  ".hamburger-icon div:last-of-type"
);
const desktopMenu = document.querySelector(".desktop-menu");
var openNav = false;
var isMobile;
var winWidth;
var navRight = document.querySelector(".nav-right");
var navLeft = document.querySelector(".nav-left");

// menu open/close
function openAnimation() {
  //opening animation for desktop nav
  openIconTop.style.webkitTransform = "rotate(-45deg) translateY(6px)";
  openIconBottom.style.webkitTransform = "rotate(45deg) translateY(-6px)";
  desktopMenu.style.webkitTransform = "scaleX(1)";
  desktopMenu.style.opacity = "1";
}

function closeAnimation() {
  //closing animation for desktop nav
  openIconTop.style.webkitTransform = "rotate(0deg) translateY(0px)";
  openIconBottom.style.webkitTransform = "rotate(0deg) translateY(0px)";
  desktopMenu.style.webkitTransform = "scaleX(0)";
  desktopMenu.style.opacity = "0";
}

var desktopFunction = function() {
  //eventlistener function for desktop nav
  if (openNav === false) {
    openAnimation();
    openNav = true;
  } else if (openNav === true) {
    closeAnimation();
    openNav = false;
  }
};

window.onload = function() {
  //determines which nav is functioning on load of page
  winWidth = window.innerWidth;
  if (winWidth <= 991) {
    //if mobile width, then mobile nav functions
    isMobile = true;
    sideMenu.style.display = "block";
    menuOpenIcon.addEventListener("click", mobileOpenFunction);
    sideMenuCloseIcon.addEventListener("click", mobileCloseFunction);
  } else if (winWidth > 991) {
    //if desktop width, then desktop nav functions
    isMobile = false;
    desktopMenu.style.display = "flex";
    menuOpenIcon.addEventListener("click", desktopFunction);
  }
  // if (winWidth <= 499) {
  //   nav.style.display = "flex";
  //   nav.appendChild(navRight);
  //   nav.appendChild(navLeft);
  // }
};

window.onresize = function() {
  //determines which nav is functioning on resize of page
  winWidth = window.innerWidth;
  if (winWidth <= 991) {
    //if mobile width
    if (isMobile === false) {
      //and previous nav was desktop
      isMobile = true;
      desktopMenu.style.display = "none"; //reverse desktop nav functions
      menuOpenIcon.removeEventListener("click", desktopFunction);
      closeAnimation();
      openNav = false;
      sideMenu.style.display = "block"; //add mobile nav functions
      menuOpenIcon.addEventListener("click", mobileOpenFunction);
      sideMenuCloseIcon.addEventListener("click", mobileCloseFunction);
    }
  } else if (winWidth > 991) {
    //if desktop width
    if (isMobile === true) {
      //and previous nav was mobile
      isMobile = false;
      sideMenu.style.display = "none"; //reverse mobile nav functions
      menuOpenIcon.removeEventListener("click", mobileOpenFunction);
      sideMenuCloseIcon.removeEventListener("click", mobileCloseFunction);
      sideMenu.classList.remove("side-menu-open");
      openNav = false;
      desktopMenu.style.display = "flex"; //add desktop nav functions
      menuOpenIcon.addEventListener("click", desktopFunction);
    }
  }
};

var mainNavRight = document.querySelector(".nav-right");
var mainNavLeft = document.querySelector(".nav-left");
var navItems = document.querySelector(".desktop-menu");

var images = document.querySelectorAll(".modal-image");
var modals = document.querySelectorAll(".modal");
var modalImages = document.querySelectorAll(".modal img");

// nav appear on scroll
var prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", function() {
	var currentScrollpos = window.pageYOffset;

	mainNavRight.style.position = "fixed";
  mainNavRight.style.top = "0";
  mainNavLeft.style.position = "fixed";
  mainNavLeft.style.top = "0";

  if (mediaSize <= 575 && window.pageYOffset > 0) {
    if (prevScrollpos > currentScrollpos) {
      mainNavRight.style.transform = "translateY(0px)";
      mainNavLeft.style.transform = "translateY(0px)";
      navItems.style.transform = "translateY(0px)";
    } else {
      mainNavRight.style.transform = "translateY(-" + mainNavRight.clientHeight + "px)";
      mainNavLeft.style.transform = "translateY(-" + mainNavRight.clientHeight + "px)";
      navItems.style.transform = "translateY(-" + mainNavRight.clientHeight + "px)";
    }
    prevScrollpos = currentScrollpos;
  } else {
    mainNavRight.style.transform = "translateY(0px)";
    mainNavLeft.style.transform = "translateY(0px)";
    navItems.style.transform = "translateY(0px)";
  }
})

// ARROW BUTTON
let mybutton = document.getElementById("arrow");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 





 // ¯\_(ツ)_/¯



 














document.addEventListener("DOMContentLoaded", function() {
 fields.name = document.getElementById('name');
 fields.email = document.getElementById('email');
 fields.phone = document.getElementbyId('phone');
 fields.message = document.getElementById('message');
})

function isNotEmpty(value) {
 if (value == null || typeof value == 'undefined' ) return false;
 return (value.length > 0);
}

function isEmail(email) {
 let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
 return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
 if (field == null) return false;

 let isFieldValid = validationFunction(field.value)
 if (!isFieldValid) {
 field.className = 'placeholderRed';
 } else {
 field.className = '';
 }

 return isFieldValid;
}

function isValid() {
 var valid = true;
 
 valid &= fieldValidation(fields.name, isNotEmpty);
 valid &= fieldValidation(fields.email, isEmail);
 valid &= fieldValidation(fields.message, isNotEmpty);
 valid &= arePasswordsEqual();

 return valid;
}

class User {
 constructor(name, email, phone, message) {
this.name = name;
 this.email = email;
  this.phone = phone;
 this.message = message;
 }
}

const form = document.querySelector('form');
const successMessage = document.querySelector('#form');
form.addEventListener('submitt', (e) => {
    e.preventDefault();
    successMessage.classList.add('show');
    setTimeout(() => form.submit(), 2000);
} );

function sendContact() {
fields.email = getEmail();
if (isValid()) {
let usr = new User (name.value, isEmail.value, phone.value, message.value);
alert(`{name } Thank you for contacting me!`)
 } else {
  alert ("There was an error.")
}}