let responsiveMenuIcon = document.getElementById("responsive-menu-icon");
let hiddenMenu = document.getElementById("hidden-menu");
let menuStatus = false;

responsiveMenuIcon.addEventListener("click", function(){
    if (menuStatus === false) {
        hiddenMenu.classList.add("class", "pop-up-menu");
        menuStatus = true;
    } else {
        hiddenMenu.classList.remove("class", "pop-up-menu"); 
        menuStatus = false;
    }
})

let darkThemeChanger = document.getElementById("dark-theme");
let lightThemeChanger = document.getElementById("light-theme");
let darkThemeChanger2 = document.getElementById("dark-theme2");
let lightThemeChanger2 = document.getElementById("light-theme2");
let theme = document.getElementById("theme");
let logo = document.getElementById("logo");
let logo2 = document.getElementById("logo2");

let switchSheet = () => {  
    
    if (theme.getAttribute("href") === "./assets/CSS/dark-theme.css") {        
        theme.setAttribute("href", "./assets/CSS/light-theme.css");
        logo.setAttribute("src", "./assets/Images/logo red.png");
        logo2.setAttribute("src", "./assets/Images/logo red.png");
    } else {
        theme.setAttribute("href", "./assets/CSS/dark-theme.css");
        logo.setAttribute("src", "./assets/Images/logo.png");
        logo2.setAttribute("src", "./assets/Images/logo.png")
    }
};

darkThemeChanger.addEventListener("click", switchSheet);
lightThemeChanger.addEventListener("click", switchSheet);
darkThemeChanger2.addEventListener("click", switchSheet);
lightThemeChanger2.addEventListener("click", switchSheet);

window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('test');
    let screenSize = window.innerHeight;
    
    for (var i = 0; i < elements.length; i++) {
        let element = elements[i];
  
        if (element.getBoundingClientRect().top < screenSize) {
            element.classList.add("visible");
        } else {
            element.classList.remove("visible");
        }
    }
});

let expandButton = document.getElementById("expandButton");

let switchButtons = () => {
    let contactInfo = document.getElementById("contact-info");

    if (contactInfo.getAttribute("class") === "hidden") {
        contactInfo.classList.remove("hidden")
    } else {
        contactInfo.classList.add("hidden")
    }
};

expandButton.addEventListener("click", switchButtons);




