function validateSignin(event){
    event.preventDefault(); // stop the default flow of the form

    fetch("js/course_data.xml")
    .then(response => response.text())
    .then(data => {
        const xmlParser = new DOMParser();
        const xml = xmlParser.parseFromString(data, "application/xml");
        const universityEmail = xml.getElementsByTagName("email")[0].textContent
        const actualPsw = xml.getElementsByTagName("password")[0].textContent

        var email = document.getElementById("emailBox").value; // get input value for email
        var pswBox = document.getElementById("pswBox").value; // get input value for password
        var errorTextUnfilled = document.getElementById("unfilled")
        var errorTextInvalid = document.getElementById("invalid")

        if (email == "" || pswBox == ""){
            errorTextInvalid.style.display = "none"; // display appropriate warning text
            errorTextUnfilled.style.display = "block";
            return false;
        }
        if (email == universityEmail && pswBox == actualPsw){
            // check if variable exists. if not, create session variables in browser 
            sessionStorage.setItem("accountStatus", "logged");
            sessionStorage.setItem("webStatus", sessionStorage.getItem("webStatus") || "unenrolled");
            sessionStorage.setItem("programmingStatus", sessionStorage.getItem("programmingStatus") || "unenrolled");
            sessionStorage.setItem("databaseStatus", sessionStorage.getItem("databaseStatus") || "unenrolled");
            sessionStorage.setItem("mathsStatus", sessionStorage.getItem("mathsStatus") || "unenrolled");
            window.location.href = "home.html"; // redirect to homepage
            return false;
        } else {
            errorTextUnfilled.style.display = "none";
            errorTextInvalid.style.display = "block";
        
            return false;
        }
    });
} 