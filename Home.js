
function openNavbar() {
    document.getElementById("sideNavigationBar").style.width = "50%";
}


function closeNavbar() {
    document.getElementById("sideNavigationBar").style.width = "0%";
}

document.getElementById('registerButton').addEventListener('click', function() {
    window.location.href = 'register.html'; // Redirect to the registration page
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

 
    alert('Thank you for registering!');


    window.location.href = 'thankyou.html'; 
});





