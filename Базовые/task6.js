elem6.onclick = function() {
  let val1 = document.getElementById('input1_task6').value;
  nameTime(val1);
};

function nameTime(value){
  let date = new Date();
  let time = date.getHours();
  console.log(time);
  if ((time > 0) && (time < 6)) {
    return document.getElementById("result6").innerHTML = `Доброй ночи ${value}`;
  } else if ((time > 6) && (time < 12)) {
    return document.getElementById("result6").innerHTML = `Доброе утро ${value}`;
  } else if ((time > 12) && (time < 18)) {
    return document.getElementById("result6").innerHTML = `Добрый день ${value}`;
  } else if ((time > 18) && (time < 0)) {
    return document.getElementById("result6").innerHTML = `Добрый вечер ${value}`;
  } 
    
}

