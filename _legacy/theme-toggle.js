// JavaScript to toggle theme
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const themeHint = document.createElement('div');

// Check localStorage for theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
}

// Show theme hint message
themeHint.id = 'theme-hint';
themeHint.textContent = 'กดปุ่มนี้เพื่อเปลี่ยนธีม!';
document.body.appendChild(themeHint);

// Remove hint with fade effect after 5 seconds
setTimeout(() => {
    themeHint.classList.add('hidden'); // Add class to trigger fade out
    setTimeout(() => {
        themeHint.remove(); // Remove element completely after fade
    }, 1000); // Wait for fade-out duration (1s)
}, 5000);

// Add event listener to toggle button
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update button text based on theme
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️';
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        toggleButton.textContent = '🌙';
        localStorage.setItem('theme', 'light'); // Save preference
    }
});
