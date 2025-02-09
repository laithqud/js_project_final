function showPasswordInput() {
    let email = document.getElementById('email').value;
    if (email.trim() === '') {
        alert('Please enter your email');
        return;
    } 

    let storedEmail = localStorage.getItem("email");
    if (email.trim() !== storedEmail) {
        alert('email not exist');
        return;
    }

    
    document.getElementById('email').style.display= 'none';
    document.getElementById('next').style.display= 'none';
    document.getElementById('npassword').classList.remove('hidden');
    

   
}

function resetPassword() {
    let password = document.getElementById('new-password').value;
    if (password.trim() === '') {
        alert('Please enter a new password');
        return;
    }
    
    localStorage.removeItem('password');
    localStorage.setItem('password', password);
    alert('Password reset successfully!');
}