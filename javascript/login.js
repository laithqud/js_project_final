document.getElementById("signin").addEventListener("submit", function (event) {
    event.preventDefault(); 




    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        window.location.href = "../index.html"; 
    } else {
        alert("Incorrect email or password!");
    }

    
});
