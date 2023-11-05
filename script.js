document.addEventListener('contextmenu', event => event.preventDefault())
document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) {
        return false;
    }
}

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const skillImages = document.querySelectorAll("#skill-div img");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      button.classList.add("active");
      var filter = button.getAttribute("data-filter");

      skillImages.forEach(function (image) {
        var imageFilter = image.getAttribute("data-filter");

        if (filter === "all" || filter === imageFilter) {
          image.style.display = "inline-block";
        } else {
          image.style.display = "none";
        }
      });
    });
  });
});