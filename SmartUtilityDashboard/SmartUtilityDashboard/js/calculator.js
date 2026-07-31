// =============================
// Calculator Display
// =============================

const display = document.getElementById("display");

// =============================
// Append Number/Operator
// =============================

function appendValue(value) {

    display.value += value;

}

// =============================
// Calculate Result
// =============================

function calculate() {

    try {

        display.value = eval(display.value);

    }

    catch {

        alert("Invalid Expression");

        clearDisplay();

    }

}

// =============================
// Clear Display
// =============================

function clearDisplay() {

    display.value = "";

}

// =============================
// Delete Last Character
// =============================

function backspace() {

    display.value = display.value.slice(0, -1);

}

// =============================
// Square Root
// =============================

function sqrt() {

    if (display.value === "") {

        return;

    }

    display.value = Math.sqrt(parseFloat(display.value));

}

// =============================
// Square
// =============================

function square() {

    if (display.value === "") {

        return;

    }

    display.value = Math.pow(parseFloat(display.value), 2);

}

// =============================
// Percentage
// =============================

function percentage() {

    if (display.value === "") {

        return;

    }

    display.value = parseFloat(display.value) / 100;

}

// =============================
// Power
// Example: 5^2
// =============================

function power() {

    if (display.value === "") {

        return;

    }

    display.value = Math.pow(parseFloat(display.value), 2);

}

// =============================
// Factorial
// =============================

function factorial() {

    let num = parseInt(display.value);

    if (num < 0) {

        alert("Factorial not defined.");

        return;

    }

    let fact = 1;

    for (let i = 1; i <= num; i++) {

        fact *= i;

    }

    display.value = fact;

}

// =============================
// Trigonometric Functions
// =============================

function sin() {

    display.value = Math.sin(display.value * Math.PI / 180);

}

function cos() {

    display.value = Math.cos(display.value * Math.PI / 180);

}

function tan() {

    display.value = Math.tan(display.value * Math.PI / 180);

}

// =============================
// Logarithm
// =============================

function log() {

    display.value = Math.log10(display.value);

}

// =============================
// Natural Log
// =============================

function ln() {

    display.value = Math.log(display.value);

}