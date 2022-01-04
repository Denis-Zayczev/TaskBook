(function() {
  function task1() {
    document.getElementById("input1_task6").setAttribute("disabled", "disabled");
  };

  function task2() {
    document.getElementById("input1_task6").removeAttribute ("disabled");
  };

  elem5.addEventListener("click", task1);
  elem6.addEventListener("click", task2);
})();