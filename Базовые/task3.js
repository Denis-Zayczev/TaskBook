elem3.onclick = function() {
  let val1 = document.getElementById('input1_task3').value;
  gender(val1);
};

function gender(value) {
  let man = "мужской";
  let woman = 'женский';
  let notGender = "не опеределен";
  
  if (value === 'М') {
    return document.getElementById("result3").innerHTML =  `Ваш пол ${man}`;
  } else if (value === 'Ж') {
    return document.getElementById("result3").innerHTML =  `Ваш пол ${woman}`;
  } else {
    return document.getElementById("result3").innerHTML =  `Ваш пол ${notGender}`;
  }
}

