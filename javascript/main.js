let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.about .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .image-container .image').src = src;
    }
});



/////////////////////////////////////////////////////////////////////
const navLinks = document.querySelectorAll('nav ul li a');
const pages = document.querySelectorAll('main .page');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior

    const pageId = link.dataset.page; // Get the page ID from the data attribute

    // Hide all pages
    pages.forEach(page => page.classList.remove('active'));

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
      selectedPage.classList.add('active');
    }

    // Update active link styling (optional)
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    link.classList.add('active');
  });
});
//////////////////////////////////////////////////////////////////////////////////

function sendEmail() {
    const name = document.getElementById('ContactForm1_contact-form-subject').value;
    const email = document.getElementById('ContactForm1_contact-form-email').value;
    const message = document.getElementById('ContactForm1_contact-form-email-message').value;
    const receiverEmail = email;
    const subject = name;
    const body = message ;
    const mailtoLink = 'mailto:' + receiverEmail + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink;
}

