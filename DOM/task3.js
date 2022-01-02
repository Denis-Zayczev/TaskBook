(function() {
  function task1() {
    let inputValue = document.getElementById("input1_task3").value;
    if (inputValue === "") {
      alert("Вы ничего не ввели в поле");
    } else {
      alert(`Вы ввели ${inputValue}`);
    }
  };

  elem3.addEventListener("click", task1);
})();