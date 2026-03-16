function programEnroll() {
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
    var emailFormatError = document.getElementById("email_format_error");
    var phoneLengthError = document.getElementById("phone_length_warn");

    if (!(email.includes("zeroth.edu.us"))){
        emailFormatError.style.display = "flex";
        return false 
    }

    if (phoneNumber.length != 10 || !(/^\d+$/.test(phoneNumber))){ // regex validation
        phoneLengthError.style.display = "flex";
        return false
    }

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
    } else {
        sessionStorage.setItem("programmingStatus", "enrolled");
        window.location.href = "programMaterial.html";
        return false;
    }
} 

function webEnroll() {
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
    var emailFormatError = document.getElementById("email_format_error");
    var phoneLengthError = document.getElementById("phone_length_warn");

    if (!(email.includes("zeroth.edu.us"))){
        emailFormatError.style.display = "flex";
        return false 
    }

    if (phoneNumber.length != 10 || !(/^\d+$/.test(phoneNumber))){ // regex validation
        phoneLengthError.style.display = "flex";
        return false
    }

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
    } else {
        sessionStorage.setItem("webStatus", "enrolled");
        window.location.href = "webDevMaterial.html";
        return false;
    }
} 

function dbEnroll() {
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
    var emailFormatError = document.getElementById("email_format_error");
    var phoneLengthError = document.getElementById("phone_length_warn");

    if (!(email.includes("zeroth.edu.us"))){
        emailFormatError.style.display = "flex";
        return false 
    }

    if (phoneNumber.length != 10 || !(/^\d+$/.test(phoneNumber))){ // regex validation
        phoneLengthError.style.display = "flex";
        return false
    }

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
    } else {
        sessionStorage.setItem("databaseStatus", "enrolled");
        window.location.href = "databaseMaterial.html";
        return false;
    }
} 

function mathEnroll() {
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
    var emailFormatError = document.getElementById("email_format_error");
    var phoneLengthError = document.getElementById("phone_length_warn");

    if (!(email.includes("zeroth.edu.us"))){
        emailFormatError.style.display = "flex";
        return false 
    }

    if (phoneNumber.length != 10 || !(/^\d+$/.test(phoneNumber))){ // regex validation
        phoneLengthError.style.display = "flex";
        return false
    }

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
    } else {
        sessionStorage.setItem("mathsStatus", "enrolled");
        window.location.href = "mathMaterial.html";
        return false;
    }
} 