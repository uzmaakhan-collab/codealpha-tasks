 let display = document.getElementById("display");
    let historyBox = document.getElementById("history");

    function appendValue(val) {
        if (display.innerText === "0") {
            display.innerText = val;
        } else {
            display.innerText += val;
        }
    }

    function clearDisplay() {
        display.innerText = "0";
    }

    function backspace() {
        display.innerText = display.innerText.slice(0, -1) || "0";
    }

    function calculate() {
        try {
            let result = eval(display.innerText);
            historyBox.innerHTML += `${display.innerText} = ${result}<br>`;
            display.innerText = result;
        } catch {
            display.innerText = "Error";
        }
    }

    function toggleTheme() {
        document.body.classList.toggle("light");
    }

    // Keyboard Support
    document.addEventListener("keydown", (event) => {
        const key = event.key;
        if ("0123456789+-*/().".includes(key)) appendValue(key);
        if (key === "Enter") calculate();
        if (key === "Backspace") backspace();
        if (key === "Escape") clearDisplay();
    });

