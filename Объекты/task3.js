(function() {
  let arr = [];
  elem3.addEventListener("click", task3);

  function task3() {
    let a = document.getElementById('input1_task3').valueAsNumber;
    arr.push(a);
    document.getElementById("result4").innerHTML = `Массив: ${arr}`;
    massive(arr);
  };

  function massive(arr) {
    const getAverage = (arr) => {
      const sum = arr.reduce((acc, number) => acc + number, 0);
      const length = arr.length;
      return sum / length;
    };
    return document.getElementById("result5").innerHTML = `Среднее арифметическое : ${(Math.round(getAverage(arr)))}`;
  }
})();