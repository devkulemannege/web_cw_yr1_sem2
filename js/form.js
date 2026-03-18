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
    } else {
        emailFormatError.style.display = "none";
    }

    if (phoneNumber.length != 10 || !(/^\d+$/.test(phoneNumber))){ // regex validation
        phoneLengthError.style.display = "flex";
        return false
    }else {
        phoneLengthError.style.display = "none";
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
        const div = document.querySelector("#email_warn_text");
        const displayStatus = window.getComputedStyle(div).display;

        if (displayStatus === "none"){
            sessionStorage.setItem("programmingStatus", "enrolled");
            window.location.href = "programMaterial.html";
        } else {
            window.location.href = "home.html";
        }
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
    } else {
        emailFormatError.style.display = "none";
    }

    if (phoneNumber.length != 10 || !(/^\d+$/.test(phoneNumber))){ // regex validation
        phoneLengthError.style.display = "flex";
        return false
    }else {
        phoneLengthError.style.display = "none";
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
        const div = document.querySelector("#email_warn_text");
        const displayStatus = window.getComputedStyle(div).display;

        if (displayStatus === "none"){
            sessionStorage.setItem("webStatus", "enrolled");
            window.location.href = "webDevMaterial.html";
        } else {
            window.location.href = "home.html";
        }
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
    } else {
        emailFormatError.style.display = "none";
    }

    if (phoneNumber.length != 10 || !(/^\d+$/.test(phoneNumber))){ // regex validation
        phoneLengthError.style.display = "flex";
        return false
    }else {
        phoneLengthError.style.display = "none";
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
        const div = document.querySelector("#email_warn_text");
        const displayStatus = window.getComputedStyle(div).display;

        if (displayStatus === "none"){
            sessionStorage.setItem("databaseStatus", "enrolled");
            window.location.href = "databaseMaterial.html";
        } else {
            window.location.href = "home.html";
        }
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
    } else {
        emailFormatError.style.display = "none";
    }

    if (phoneNumber.length != 10 || !(/^\d+$/.test(phoneNumber))){ // regex validation
        phoneLengthError.style.display = "flex";
        return false
    } else {
        phoneLengthError.style.display = "none";
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
        const div = document.querySelector("#email_warn_text");
        const displayStatus = window.getComputedStyle(div).display;

        if (displayStatus === "none"){
            sessionStorage.setItem("mathsStatus", "enrolled");
            window.location.href = "mathMaterial.html";
        } else {
            window.location.href = "home.html";
        }
        return false;
    }
} 