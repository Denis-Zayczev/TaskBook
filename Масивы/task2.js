elem2.onclick = function() {
  let a = document.getElementById('input1_task2').valueAsNumber;
  arr.push(a);
  document.getElementById("result2").innerHTML = `Массив: ${arr}`;
  massive(arr);

};

function massive(arr) {
  const result = arr.filter(arr => arr % 5 == 0);
  return document.getElementById("result3").innerHTML = `Кратные пяти : ${result}`;
}