document.getElementById("signup").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;

    if (!fullname || !email || !password || !confirmpassword) {
        alert("Please fill in all fields!");
        return;
    } else if (password !== confirmpassword) {
        alert("Password mismatch!");
        return;
        }

    
    let users = JSON.parse(localStorage.getItem("users")) || []; 

        
    if (users.some(user => user.email === email)) {
        alert(" Emaill already exist!");
        return;
    }

    localStorage.setItem("fullname", fullname);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    let newUser = { fullname, email, password:btoa(password) };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users)); 

    alert("Account created successfully!");
    window.location.href = "login.html"; 
    
});

