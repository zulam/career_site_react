// $(window).scroll(function(){
//     $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
//   });

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navResize() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

window.onscroll = function() { stick() };

function stick() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}