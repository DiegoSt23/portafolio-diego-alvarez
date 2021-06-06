let responsiveMenuIcon = document.getElementById("responsive-menu-icon");
let closeIcon = document.getElementById("close-menu-icon");
let hiddenMenu = document.getElementById("hidden-menu");
let menuStatus = false;

responsiveMenuIcon.addEventListener("click", function(){
    if (menuStatus === false) {
        hiddenMenu.classList.add("class", "pop-up-menu");
        responsiveMenuIcon.classList.add("class", "open-pop-up-menu")
        closeIcon.classList.add("class", "close-pop-up-menu")
        menuStatus = true;
    }
})

closeIcon.addEventListener("click", function() {
    if (menuStatus === true) {
        hiddenMenu.classList.remove("class", "pop-up-menu"); 
        responsiveMenuIcon.classList.remove("class", "open-pop-up-menu")
        closeIcon.classList.remove("class", "close-pop-up-menu")
        menuStatus = false;
    }
})
