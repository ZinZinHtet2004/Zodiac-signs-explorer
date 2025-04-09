// Get all box elements
const boxes = document.querySelectorAll('#box');
let zodiacSignName;
// Add click event listener to each box element
boxes.forEach(box => {
    box.addEventListener('click', (event) => {
         // Prevent the default action of the click event
         event.preventDefault();

        // Find the corresponding text element containing the zodiac sign name
         zodiacSignName = box.nextElementSibling.textContent;
        //console.log('Zodiac Sign Name:', zodiacSignName);
        sessionStorage.setItem("signName", zodiacSignName);
        window.location.href="eachzodiac.html";
    });
});
/* mouse over box */

let zodiac = document.getElementsByClassName("headBar")[0];
                let signBox = document.getElementById("signBox");
                zodiac.addEventListener("mouseover",()=>{
                     signBox.style.display="block";
                   
                })
                zodiac.addEventListener("mouseout",()=>{
                    signBox.style.display="none";
                });
                signBox.addEventListener("mouseover",()=>{
                    signBox.style.display="block";
                })
                signBox.addEventListener("mouseout",()=>{
                    signBox.style.display="none";
                })

//get data from popup box
var signcards = document.querySelectorAll('#signcard');

    signcards.forEach(function(signcard) {
        signcard.addEventListener('click', function() {
            var signName = this.querySelector('span').innerText;
            console.log(signName);
            // Store the signName in session storage
            sessionStorage.setItem('signName', signName);
            // Redirect to another page
            window.location.href = 'eachzodiac.html';
        });
    });

    /*light-dark mode */
 // Get the icon element
var icon = document.getElementById("icon");

// Check if there's a mode preference saved in local storage
var isDarkMode = localStorage.getItem("darkMode") === "true";

// Function to set the mode
function setMode(isDark) {
    document.body.classList.toggle("darktheme", isDark);
    icon.src = isDark ? "sun.png" : "moon.png";
}

// Set the mode based on the preference
setMode(isDarkMode);

// Toggle mode when the icon is clicked
icon.onclick = function() {
    isDarkMode = !isDarkMode; // Toggle the mode
    localStorage.setItem("darkMode", isDarkMode); // Save the preference in local storage
    setMode(isDarkMode); // Apply the mode
};
 