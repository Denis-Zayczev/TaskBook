(function() {

  let ladder = {
    steps: 0,
  }

  function up() {
    ladder.steps += 1;
    document.getElementById("result4").innerHTML = `Ступенька: ${ladder.steps}`;
    
  }



  function down() {
    ladder.steps -= 1;
    document.getElementById("result4").innerHTML = `Ступенька: ${ladder.steps}`;
  }


  elem3.addEventListener("click", up);
  elem4.addEventListener("click", down);
})();