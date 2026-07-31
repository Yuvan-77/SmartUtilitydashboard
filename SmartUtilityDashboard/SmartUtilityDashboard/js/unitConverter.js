// ===========================================
// Unit Converter
// ===========================================

// Conversion factors to a base unit
const conversionData = {

    length: {
        mm: 0.001,
        cm: 0.01,
        m: 1,
        km: 1000,
        in: 0.0254,
        ft: 0.3048,
        yd: 0.9144,
        mi: 1609.344
    },

    weight: {
        mg: 0.001,
        g: 1,
        kg: 1000,
        t: 1000000,
        oz: 28.3495,
        lb: 453.592
    },

    area: {
        sqm: 1,
        sqkm: 1000000,
        sqft: 0.092903,
        sqyd: 0.836127,
        acre: 4046.86,
        hectare: 10000
    },

    volume: {
        ml: 0.001,
        l: 1,
        m3: 1000,
        gallon: 3.78541,
        pint: 0.473176,
        cup: 0.236588
    },

    speed: {
        ms: 1,
        kmh: 0.277778,
        mph: 0.44704,
        knot: 0.514444
    },

    time: {
        sec: 1,
        min: 60,
        hour: 3600,
        day: 86400,
        week: 604800,
        month: 2628000,
        year: 31536000
    },

    pressure: {
        pa: 1,
        kpa: 1000,
        bar: 100000,
        psi: 6894.76,
        atm: 101325
    },

    energy: {
        j: 1,
        kj: 1000,
        cal: 4.184,
        kcal: 4184,
        wh: 3600,
        kwh: 3600000
    },

    power: {
        w: 1,
        kw: 1000,
        hp: 745.7
    },

    data: {
        bit: 1,
        byte: 8,
        kb: 8192,
        mb: 8388608,
        gb: 8589934592,
        tb: 8796093022208
    },

    angle: {
        deg: 1,
        rad: 57.2958,
        grad: 0.9
    }

};

// ===========================================
// Update Units
// ===========================================

function updateUnits() {

    const category = document.getElementById("category").value;

    const from = document.getElementById("fromUnit");

    const to = document.getElementById("toUnit");

    from.innerHTML = "";
    to.innerHTML = "";

    if (category === "temperature") {

        const units = [
            ["c","Celsius"],
            ["f","Fahrenheit"],
            ["k","Kelvin"]
        ];

        units.forEach(unit=>{

            from.innerHTML += `<option value="${unit[0]}">${unit[1]}</option>`;

            to.innerHTML += `<option value="${unit[0]}">${unit[1]}</option>`;

        });

        return;

    }

    for(const unit in conversionData[category]){

        from.innerHTML += `<option value="${unit}">${unit.toUpperCase()}</option>`;

        to.innerHTML += `<option value="${unit}">${unit.toUpperCase()}</option>`;

    }

}

// ===========================================
// Convert
// ===========================================

function convertUnit(){

    const category=document.getElementById("category").value;

    const from=document.getElementById("fromUnit").value;

    const to=document.getElementById("toUnit").value;

    const value=parseFloat(document.getElementById("unitValue").value);

    if(isNaN(value)){

        alert("Enter a valid number");

        return;

    }

    let result;

    if(category==="temperature"){

        if(from==="c"&&to==="f")
            result=value*9/5+32;

        else if(from==="f"&&to==="c")
            result=(value-32)*5/9;

        else if(from==="c"&&to==="k")
            result=value+273.15;

        else if(from==="k"&&to==="c")
            result=value-273.15;

        else if(from==="f"&&to==="k")
            result=(value-32)*5/9+273.15;

        else if(from==="k"&&to==="f")
            result=(value-273.15)*9/5+32;

        else
            result=value;

    }

    else{

        const base=value*conversionData[category][from];

        result=base/conversionData[category][to];

    }

    document.getElementById("unitResult").innerHTML=

    `<h2>Result : ${result.toFixed(4)} ${to.toUpperCase()}</h2>`;

}

// ===========================================
// Initial Load
// ===========================================

updateUnits();