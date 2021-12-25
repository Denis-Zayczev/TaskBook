let arr = [];
elem.onclick = function() {
  let a = document.getElementById('input1_task1').valueAsNumber;
  arr.push(a);
  document.getElementById("result").innerHTML = `Массив: ${arr}`;
  massive(arr);

};

function massive(arr) {
  function isPositive(arr) {
    return arr % 2 == 0;
  }
  return document.getElementById("result2").innerHTML = `Четные числа в массиве? : ${(arr.every(isPositive))}`;
}