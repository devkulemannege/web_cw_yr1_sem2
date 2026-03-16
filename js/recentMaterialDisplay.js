        fetch("js/course_data.xml")
        .then(response => response.text())
        .then(data => {
            // read sessions variables
            var programStatus = sessionStorage.getItem("programmingStatus")
            var webStatus = sessionStorage.getItem("webStatus")
            var dbStatus = sessionStorage.getItem("databaseStatus")
            var mathStatus = sessionStorage.getItem("mathsStatus")

            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");

            let courseFiles = [] // initialize list to store courseFiles
            
            if (programStatus === "enrolled"){
                const course = xml.querySelector('course[id="programming"]'); // change id according to the course
                const materials = course.getElementsByTagName("materials")[0].getElementsByTagName("material");

                for (let i = 0; i < materials.length; i++) {
                    courseFiles.push([
                        `${materials[i].getElementsByTagName("courseName")[0].textContent}`,
                        `${materials[i].getElementsByTagName("title")[0].textContent}`
                    ])
                }
            }
            if (webStatus === "enrolled"){
                const course = xml.querySelector('course[id="web"]'); // change id according to the course
                const materials = course.getElementsByTagName("materials")[0].getElementsByTagName("material");

                for (let i = 0; i < materials.length; i++) {
                    courseFiles.push([
                        `${materials[i].getElementsByTagName("courseName")[0].textContent}`,
                        `${materials[i].getElementsByTagName("title")[0].textContent}`
                    ])
                }
            }
            if (dbStatus === "enrolled"){
                const course = xml.querySelector('course[id="database"]'); // change id according to the course
                const materials = course.getElementsByTagName("materials")[0].getElementsByTagName("material");

                for (let i = 0; i < materials.length; i++) {
                    courseFiles.push([
                        `${materials[i].getElementsByTagName("courseName")[0].textContent}`,
                        `${materials[i].getElementsByTagName("title")[0].textContent}`
                    ])
                }
            }
            if (mathStatus === "enrolled"){
                const course = xml.querySelector('course[id="maths"]'); // change id according to the course
                const materials = course.getElementsByTagName("materials")[0].getElementsByTagName("material");

                for (let i = 0; i < materials.length; i++) {
                    courseFiles.push([
                        `${materials[i].getElementsByTagName("courseName")[0].textContent}`,
                        `${materials[i].getElementsByTagName("title")[0].textContent}`
                    ])
                }
            }

            // add enrolled course' files to home page
            const materialDiv = document.querySelector('.material_div');
            if (courseFiles.length > 0) {
                for (let i=0; i < 5; i++){ // only show maximum 5 course files
                    const detailBox = `
                        <div class='detailBox'>
                            <div style="width:7vh">
                                <img src="assets/pepicons-pop_file.png" height="55" alt="course_material_icon">
                            </div>
                            <div style="margin-left: 20px; margin-top: -20px; margin-bottom: -20px;">
                                <p class = "fix_font_fam" style="font-weight: bold;">${courseFiles[i][0]}</p>
                                <p class = "fix_font_fam">${courseFiles[i][1]}</p>
                                <p class = "fix_font_fam" style="font-weight:lighter; font-size:12px"><i>Click to Download</i></p>
                            </div>
                        </div>
                    `;

                    materialDiv.innerHTML += detailBox;
                }
            } else {
                materialDiv.innerHTML = "<p class='no_material' style='display: flex;justify-content: center;align-items: center;height: 50vh;'>No materials available. Select a course to enroll.</p>";
            }
        });