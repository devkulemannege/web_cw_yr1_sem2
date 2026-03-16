function validateSignin(){
    var email = document.getElementById("emailBox").value;
    var pswBox = document.getElementById("pswBox").value;
    var errorTextUnfilled = document.getElementById("unfilled")
    var errorTextInvalid = document.getElementById("invalid")

    function forceSignin(){
        let confirmValue = confirm(`IMPORTANT\n\nSign-in credentials have been documented in Page 3 of the Coursework Report. The reason for this approach has been justified & documented on the same page.\n
            E-mail: elias.8645@zeroth.edu.us
            Password: elias8645\n\nPress "Ok" to force sign-in\nPress "Cancel" to close this box.`)

        if (confirmValue){
            //create session variables in browser 
            sessionStorage.setItem("accountStatus", "logged");
            sessionStorage.setItem("webStatus", "unenrolled")
            sessionStorage.setItem("programmingStatus", "unenrolled")
            sessionStorage.setItem("databaseStatus", "unenrolled")
            sessionStorage.setItem("mathsStatus", "unenrolled")

            window.location.href = "home.html";
        }
    }

    if (email == "" || pswBox == ""){
        errorTextInvalid.style.display = "none";
        errorTextUnfilled.style.display = "block";

        forceSignin()

        return false;
    }
    if (email == "elias.8645@zeroth.edu.us" && pswBox == "elias8645"){
        
        //create session variables in browser 
        sessionStorage.setItem("accountStatus", "logged");
        sessionStorage.setItem("webStatus", "unenrolled")
        sessionStorage.setItem("programmingStatus", "unenrolled")
        sessionStorage.setItem("databaseStatus", "unenrolled")
        sessionStorage.setItem("mathsStatus", "unenrolled")

        window.location.href = "home.html";
        return false;
    } else {
        errorTextUnfilled.style.display = "none";
        errorTextInvalid.style.display = "block";
        
        forceSignin()

        return false;
    }
} 