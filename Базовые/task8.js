elem8.onclick = function() {
  let val1 = document.getElementById('input1_task8').value;
  let val2 = document.getElementById('input2_task8').value;

  hello(val1, val2);
};

function hello(firstName, ages) {
  let a = age(ages);
  return document.getElementById("result8").innerHTML = `${firstName} имеет возраст ${a}`;
}

function age(kek) {
  for (let i = 1; i <= 100; i++) {
    if (kek >= 1 && kek <= 17) {
      let lol = (`${kek} и он ребёнок`);
      return lol;
    } else if (kek >= 18 && kek <= 29) {
      let lol = (`${kek} и он молодой`);
      return lol;
    } else if (kek >= 31 && kek <= 54) {
      let lol = (`${kek} и он зрелый`);
      return lol;
    } else if (kek >= 55) {
      let lol = (`${kek} и он старый`);
      return lol;
    }
  }
}