function enroll() {
    // Text Inputs
    const firstName = document.getElementById("Fname").value;
    const lastName = document.getElementById("Lname").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("num").value;
    const dob = document.getElementById("dob").value;

    const selectedGender = document.querySelector('input[name="gender"]:checked');
    const gender = selectedGender ? selectedGender.value : null;
    const paymentMethod = document.getElementById("paymentMethod").value;

    var errorTextUnfilled = document.getElementById("unfilled")

    if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        phoneNumber === "" ||
        dob === "" ||
        gender === null ||
        paymentMethod === ""
    ) {
        errorTextUnfilled.style.display = "flex";
        return false;
    } else if (email !== "elias.8645@zeroth.edu.us"){
        alert("Currently Logged in Account WILL NOT receive access to course as it is different from enrolling email")
        window.location.href = "home.html";
        return false;
    }
    
    sessionStorage.setItem("programmingStatus", "enrolled");
    window.location.href = "programMaterial.html";
} 