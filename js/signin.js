function validateSignin(){
    var email = document.getElementById("emailBox").value;
    var pswBox = document.getElementById("pswBox").value;
    var errorTextUnfilled = document.getElementById("unfilled")
    var errorTextInvalid = document.getElementById("invalid")

    if (email == "" || pswBox == ""){
        errorTextInvalid.style.display = "none";
        errorTextUnfilled.style.display = "block";

        return false;
    }
    if (email == "elias.8645@zeroth.edu.us" && pswBox == "elias8645"){
        
        // check if variable exists. if not, create session variables in browser 
        sessionStorage.setItem("accountStatus", sessionStorage.getItem("accountStatus") || "logged");
        sessionStorage.setItem("webStatus", sessionStorage.getItem("webStatus") || "unenrolled");
        sessionStorage.setItem("programmingStatus", sessionStorage.getItem("programmingStatus") || "unenrolled");
        sessionStorage.setItem("databaseStatus", sessionStorage.getItem("databaseStatus") || "unenrolled");
        sessionStorage.setItem("mathsStatus", sessionStorage.getItem("mathsStatus") || "unenrolled");

        window.location.href = "home.html";
        return false;
    } else {
        errorTextUnfilled.style.display = "none";
        errorTextInvalid.style.display = "block";
    

        return false;
    }
} 