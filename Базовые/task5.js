elem5.onclick = function() {
  let val1 = document.getElementById('input1_task5').value;
  word(val1);
};

function word(value){
  return document.getElementById("result5").innerHTML = value.split(" ")[0]
}