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
