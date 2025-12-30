const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let current = "";
let memory = 0;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;

    if (!isNaN(value) || value === ".") {
      current += value;
      display.innerText = current;
    }

    else if (value === "C/CE") {
      current = "";
      display.innerText = "0";
    }

    else if (value === "OFF") {
      current = "";
      display.innerText = "";
    }

    else if (value === "=") {
      try {
        current = eval(current.replace("×", "*").replace("÷", "/"));
        display.innerText = current;
      } catch {
        display.innerText = "Error";
      }
    }

    else if (value === "√") {
      current = Math.sqrt(current).toString();
      display.innerText = current;
    }

    else if (value === "%") {
      current = (current / 100).toString();
      display.innerText = current;
    }

    else if (value === "M+") {
      memory += Number(current);
      current = "";
    }

    else if (value === "M-") {
      memory -= Number(current);
      current = "";
    }

    else if (value === "MRC") {
      current = memory.toString();
      display.innerText = current;
    }

    else {
      current += value;
      display.innerText = current;
    }
  });
});
