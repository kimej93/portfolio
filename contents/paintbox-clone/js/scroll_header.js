const header = document.getElementById("header");
const logo = document.querySelector(".logo img");
const subMenu = document.getElementById("sub-menu");

window.addEventListener("scroll", function () {
  if (window.innerWidth > 1023) {
    if (window.scrollY > 0) {
      header.setAttribute(
        "style",
        "height : 70px; transition : 0.3s; -webkit-transition: 0.3s;  -moz-transition: 0.3s;"
      );
      logo.setAttribute(
        "style",
        "width:60%; transition : 0.3s; -webkit-transition: 0.3s;  -moz-transition: 0.3s;"
      );
    } else {
      header.setAttribute(
        "style",
        "height : 155px; transition : 0.3s; -webkit-transition: 0.3s;  -moz-transition: 0.3s;"
      );
      logo.setAttribute(
        "style",
        "width:100%; transition : 0.3s; -webkit-transition: 0.3s;  -moz-transition: 0.3s;"
      );
    }
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth < 1024) {
    header.setAttribute(
      "style",
      "height : 50px; transition : 0.3s; -webkit-transition: 0.3s;  -moz-transition: 0.3s;"
    );
    logo.setAttribute(
      "style",
      "width:60%; transition : 0.3s; -webkit-transition: 0.3s;  -moz-transition: 0.3s;"
    );
  } else {
    header.setAttribute(
      "style",
      "height : 155px; transition : 0.3s; -webkit-transition: 0.3s;  -moz-transition: 0.3s;"
    );
    logo.setAttribute(
      "style",
      "width:100%; transition : 0.3s; -webkit-transition: 0.3s;  -moz-transition: 0.3s;"
    );
  }
});
