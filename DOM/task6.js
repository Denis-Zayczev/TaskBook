(function() {
  let a = 0;
  function toggle() {
    if (a === 0) {
      a++;
      document.getElementById("square").style.visibility = "hidden";
      document.getElementById("elem7").value = "Показать квадрат!";
    } else {
      a--;
      document.getElementById("square").style.visibility = "visible";
      document.getElementById("elem7").value = "Спрятать квадрат!";
    }
  }

  elem7.addEventListener("click", toggle);

})();