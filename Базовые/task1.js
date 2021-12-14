elem.onclick = function() {
  let val1 = document.getElementById('input1_task1').value;
  let val2 = document.getElementById('input2_task1').value;
  let result = val1 * val2;
  document.getElementById("result").innerHTML = "Ответ: " + result;
};