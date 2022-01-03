(function() {
  function task1() {
    let inputValue4 = document.getElementById("input1_task4").value;
    let inputValue5 = document.getElementById("input1_task5").value;
    document.getElementById("input1_task4").value = inputValue5;
    document.getElementById("input1_task5").value = inputValue4;
  };

  elem4.addEventListener("click", task1);
})();