document.getElementById('navIcon').onclick = function() {
    let x = document.getElementById('headerResponsive');
    if (x.className !== "header-responsive") {
      x.className = "header-responsive";
    } else {
      x.className = "header-responsive-close";
    }
}