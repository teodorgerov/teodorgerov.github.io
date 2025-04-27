// Example function to handle page transitions or interactions
document.addEventListener("DOMContentLoaded", function() {
    // For example, if you want to show an alert when a user clicks on a page link
    const pageLinks = document.querySelectorAll('nav a');

    pageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent the default link behavior
            const page = this.getAttribute('href'); // Get the link's href attribute

            // Show a confirmation message or perform some action before navigating
            alert(`You are about to visit the ${page} page!`);

            // After the alert, navigate to the page
            setTimeout(() => {
                window.location.href = page;
            }, 500); // Delay the navigation for 500ms (optional)
        });
    });

    // Additional interactive features can go here
    // Example: Toggle a dark mode for the website
    const darkModeButton = document.querySelector("#dark-mode-button");

    if (darkModeButton) {
        darkModeButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }
});
