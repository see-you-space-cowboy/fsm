const menu = document.querySelector(".nav-list");
const menuItemsLeft = document.querySelectorAll(".nav-item-left");
const menuItemsRight = document.querySelectorAll(".nav-item-right");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItemsLeft.forEach( 
  function(menuItemsLeft) { 
    menuItemsLeft.addEventListener("click", toggleMenu);
  }
)

menuItemsRight.forEach( 
    function(menuItemsRight) { 
      menuItemsRight.addEventListener("click", toggleMenu);
    }
  )
  