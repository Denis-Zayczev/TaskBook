(function() {
    function task1() {

      const parent = document.getElementById("result1");

      // const data = {
      //   one: {
      //     John: "100",
      //     Ann: "160",
      //     Pete: "130"
      //   }}


      const data = {
        one: {
          name: "John",
          money: 100
        },
        two: {
          name: "Ann",
          money: 160
        },
        next: {
          name: "Pete",
          money: 130
        },
      }

      let summ = 0;
        for (const key in data) {
          const div = document.createElement("div");
          div.classList.add("my-class");
          div.innerText = `Имя: ${data[key].name}, Деньги: ${data[key].money} `;
          parent.appendChild(div);
          summ += data[key].money;
          document.getElementById("result").innerHTML= `Сумма: ${summ}`;
        }
        
      };

      elem.addEventListener("click", task1);
    })();