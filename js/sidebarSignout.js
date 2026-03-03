
    // how to display options in navigation bar according to enrollment status of course
    
    var programStatus = sessionStorage.getItem("programmingStatus", "unenrolled")
    var webStatus = sessionStorage.getItem("webStatus", "unenrolled")
    var dbStatus = sessionStorage.getItem("databaseStatus", "unenrolled")
    var mathStatus = sessionStorage.getItem("mathsStatus", "unenrolled")

    const optionP1 = document.getElementById("programmingMaterial");
    const optionP2 = document.getElementById("programmingLecturers");
    const optionP3 = document.getElementById("programmingEnroll");

    const optionW1 = document.getElementById("webDevMaterial");
    const optionW2 = document.getElementById("webDevLecturers");
    const optionW3 = document.getElementById("webDevEnroll");

    const optionD1 = document.getElementById("databaseMaterial");
    const optionD2 = document.getElementById("databaseLecturers");
    const optionD3 = document.getElementById("databaseEnroll");

    const optionM1 = document.getElementById("mathMaterial");
    const optionM2 = document.getElementById("mathLecturers");
    const optionM3 = document.getElementById("mathEnroll");
    
    if (programStatus === "unenrolled"){
        optionP1.style.display = "none";
        optionP2.style.display = "none";
        optionP3.style.marginBottom = "-100px"
    } else if (programStatus === "enrolled"){
        optionP3.style.display = "none"
        optionP1.style.marginTop = "-20px"
    }

    if (webStatus === "unenrolled") {
        optionW1.style.display = "none";
        optionW2.style.display = "none";
        optionW3.style.marginBottom = "-100px";
    } else if (webStatus === "enrolled") {
        optionW3.style.display = "none";
        optionW1.style.marginTop = "-20px";
    }

    if (dbStatus === "unenrolled") {
        optionD1.style.display = "none";
        optionD2.style.display = "none";
        optionD3.style.marginBottom = "-100px";
    } else if (dbStatus === "enrolled") {
        optionD3.style.display = "none";
        optionD1.style.marginTop = "-20px";
    }

    if (mathStatus === "unenrolled") {
        optionM1.style.display = "none";
        optionM2.style.display = "none";
        optionM3.style.marginBottom = "-100px";
    } else if (mathStatus === "enrolled") {
        optionM3.style.display = "none";
        optionM1.style.marginTop = "-20px";
    }
    
    function showSignout(event) {
        event.stopPropagation();
    
        var navItem = event.target.closest('.login_div'); // position to be displayed 
        var dropdown = navItem.querySelector('.dropdown-content'); // get css class for dropdown
    
        var isAlreadyOpen = dropdown.style.display === 'block'; 
    
        closeallDropdowns(); // close all dropdowns
    
        if (!isAlreadyOpen) {
            dropdown.style.display = 'block'; // display only when other dropdowns are closed 
        }
    }
    function signout() {
        sessionStorage.clear();
        window.location.href = "signin.html";
    }
    function showOptions(event) {
        event.stopPropagation();

        var navItem = event.target.closest('.nav_item'); // position to be displayed 
        var dropdown = navItem.querySelector('.dropdown-content'); // get css class for dropdown

        var isAlreadyOpen = dropdown.style.display === 'block'; 

        closeallDropdowns(); // close all dropdowns

        if (!isAlreadyOpen) {
            dropdown.style.display = 'block'; // display only when other dropdowns are closed 
        }
    }

    function closeallDropdowns() {
        var dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function(d) {
            d.style.display = 'none'; // set all dropdown options to hidden
        });
    }

    window.onclick = function() {
        closeallDropdowns();
    };