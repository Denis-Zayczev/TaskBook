elem2.onclick = function() {
  let val1 = document.getElementById('input1_task2').value;
  let val2 = document.getElementById('input2_task2').value;
  let val3 = document.getElementById('input3_task2').value;
  
  hello(val1,val2,val3);
};

function hello(firstName, lastName, age) {
  return document.getElementById("result2").innerHTML =  `Привет ${firstName} ${lastName} с возрастом ${age} лет`;
}