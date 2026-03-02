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
        
        //create session variables in browser 
        sessionStorage.setItem("accountStatus", "logged");
        sessionStorage.setItem("programmingStatus", "unenrolled")
        sessionStorage.setItem("webStatus", "unenrolled")
        sessionStorage.setItem("databaseStatus", "unenrolled")
        sessionStorage.setItem("mathsStatus", "unenrolled")

        window.location.href = "home.html";
        return false;
    } else {
        errorTextUnfilled.style.display = "none";
        errorTextInvalid.style.display = "block";
        return false;
    }
} 