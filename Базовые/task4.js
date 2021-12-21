elem4.onclick = function() {
  let val1 = document.getElementById('input1_task4').value;
  weakday(val1);
};

function weakday(day) {
  switch (day) {
    case "1":
      return document.getElementById("result4").innerHTML = `Понедельник`;
    case "2":
      return document.getElementById("result4").innerHTML = `Вторник`;
    case "3":
      return document.getElementById("result4").innerHTML = `Среда`;
    case "4":
      return document.getElementById("result4").innerHTML = `Четверг`;
    case "5":
      return document.getElementById("result4").innerHTML = `Пятница`;
    case "6":
      return document.getElementById("result4").innerHTML = `Суббота`;
    case "7":
      return document.getElementById("result4").innerHTML = `Воскрсенье`;
    default:
      alert('Не правильное число.');
  }
}