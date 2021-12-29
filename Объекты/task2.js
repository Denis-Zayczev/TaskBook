(function() {
  function task2() {
    const parent = document.getElementById("result2");
    const parent2 = document.getElementById("result3");
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

    for (const key in data) {
      const div = document.createElement("div");
      div.classList.add("my-class");
      div.innerText = `Имя: ${data[key].name}, Деньги: ${data[key].money} `;
      parent.appendChild(div);
    }

    for (const key in data) {
      const div = document.createElement("div");
      div.classList.add("my-class2");
      div.innerText = `Имя: ${data[key].name}, Деньги: ${data[key].money*2} `;
      parent2.appendChild(div);
    }

  };

  elem2.addEventListener("click", task2);
})();