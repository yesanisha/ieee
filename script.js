document.addEventListener('DOMContentLoaded', function() {
    // Get the navbar
    var navbar = document.querySelector('.navbar');
    
    // Function to add or remove the 'scrolled' class
    function handleScroll() {
        if (window.scrollY > 50) { // Adjust the value as needed
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);
});

// table
function showProfiles(type) {
    // Hide all cards
    document.getElementById('students').classList.remove('active');
    document.getElementById('members').classList.remove('active');
    // Show the selected type
    document.getElementById(type).classList.add('active');
    // Update tab active state
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.tab[onclick="showProfiles('${type}')"]`).classList.add('active');
}