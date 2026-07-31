// ======================================
// Age Calculator
// ======================================

function calculateAge() {

    const dob = document.getElementById("dob").value;

    if (dob === "") {

        alert("Please select your Date of Birth.");

        return;

    }

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {

        months--;

        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += previousMonth;
    }

    if (months < 0) {

        years--;

        months += 12;

    }

    document.getElementById("ageResult").innerHTML = `

        <h3>Your Age</h3>

        <p><strong>${years}</strong> Years</p>

        <p><strong>${months}</strong> Months</p>

        <p><strong>${days}</strong> Days</p>

    `;
}