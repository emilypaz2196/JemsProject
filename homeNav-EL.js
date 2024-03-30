//open the nav menu when the navigation bar is clicked
// this is kira's code for the nav

document.addEventListener("DOMContentLoaded", function () {
    const toggleMenuLink = document.getElementById("toggleMenu");
    const menu = document.getElementById("menu");
  
    toggleMenuLink.addEventListener("click", function () {
      menu.classList.toggle("hidden");
    });
  });


//this emily's js code
//this helps text pop up when you click become a supporter

document.getElementById("openPopup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("popup")) {
    document.getElementById("popup").style.display = "none";
  }
});

  
