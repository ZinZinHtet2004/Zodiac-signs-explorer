/*calculator */
function calculateZodiac() {
    var birthdate = new Date(document.getElementById('birthdate').value);
    var month = birthdate.getMonth() + 1;
    var day = birthdate.getDate();
   
    var zodiacSigns = [
        "Capricorn",
        "Aquarius",
        "Pisces",
        "Aries",
        "Taurus",
        "Gemini",
        "Cancer",
        "Leo",
        "Virgo",
        "Libra",
        "Scorpio",
        "Sagittarius",
        "Capricorn"
    ];

    var zodiac = zodiacSigns[month - 1 + (day > 20 ? 1 : 0)];
    if(zodiac===undefined){
        return;
    }
    var resultDiv = document.getElementById('result');
    resultDiv.innerText = "Your Zodiac Sign is: " + zodiac;

    var zodiacImage = document.getElementById('zodiacImage');
    zodiacImage.src = "https://cdn.britannica.com/45/104045-050-116C1F93/Signs-of-the-Zodiac-astrology.jpg"; // Add your image URLs here
    
}

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

/*dark to light mode */
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
