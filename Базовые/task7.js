elem7.onclick = function() {
  for (let i = 1; i <= 100; i++) {
    let ul = document.getElementById("list");
    let li = document.createElement("li");

    if (i >= 1 && i <= 17) {
      li.appendChild(document.createTextNode(`${i} ребёнок`));
      ul.appendChild(li);
    } else if (i >= 18 && i <= 29) {
      li.appendChild(document.createTextNode(`${i} молодой`));
      ul.appendChild(li);
    } else if (i >= 31 && i <= 54) {
      li.appendChild(document.createTextNode(`${i} зрелый`));
      ul.appendChild(li);
    } else if (i >= 55) {
      li.appendChild(document.createTextNode(`${i} старый`));
      ul.appendChild(li);
    }
  }
}