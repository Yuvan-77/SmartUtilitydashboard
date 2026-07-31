// =============================================
// Currency Converter
// =============================================

window.onload = function () {

    loadCurrencies();

};

// ---------------------------------------------
// Load All Currencies
// ---------------------------------------------

async function loadCurrencies() {

    const from = document.getElementById("from");
    const to = document.getElementById("to");

    try {

        const response = await fetch("https://open.er-api.com/v6/latest/USD");

        const data = await response.json();

        const currencies = Object.keys(data.rates).sort();

        from.innerHTML = "";
        to.innerHTML = "";

        currencies.forEach(currency => {

            from.innerHTML += `
                <option value="${currency}">
                    ${currency}
                </option>
            `;

            to.innerHTML += `
                <option value="${currency}">
                    ${currency}
                </option>
            `;

        });

        from.value = "USD";
        to.value = "INR";

    }

    catch(error){

        console.log(error);

        alert("Unable to load currencies.");

    }

}

// ---------------------------------------------
// Convert Currency
// ---------------------------------------------

async function convertCurrency() {

    const amount = parseFloat(document.getElementById("amount").value);

    const from = document.getElementById("from").value;

    const to = document.getElementById("to").value;

    if (isNaN(amount) || amount <= 0) {

        alert("Enter a valid amount.");

        return;

    }

    try {

        const response = await fetch(

            `https://open.er-api.com/v6/latest/${from}`

        );

        const data = await response.json();

        if (data.result !== "success") {

            throw new Error("API Error");

        }

        const rate = data.rates[to];

        const converted = amount * rate;

        document.getElementById("currencyResult").innerHTML = `

            <h2>${amount} ${from} = ${converted.toFixed(2)} ${to}</h2>

            <br>

            <p>1 ${from} = ${rate.toFixed(4)} ${to}</p>

        `;

    }

    catch(error){

        console.log(error);

        document.getElementById("currencyResult").innerHTML =

        "<h3 style='color:red'>Unable to fetch exchange rates.</h3>";

    }

}

// ---------------------------------------------
// Swap Currency
// ---------------------------------------------

function swapCurrency(){

    const from = document.getElementById("from");

    const to = document.getElementById("to");

    let temp = from.value;

    from.value = to.value;

    to.value = temp;

}