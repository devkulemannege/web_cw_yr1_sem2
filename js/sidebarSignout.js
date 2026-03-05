    function showOptions(event) {
        event.stopPropagation();
    
        var navItem = event.target.closest('.header_right_area'); // position to be displayed 
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

    function closeallDropdowns() {
        var dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function(d) {
            d.style.display = 'none'; // set all dropdown options to hidden
        });
    }

    window.onclick = function() {
        closeallDropdowns();
    };