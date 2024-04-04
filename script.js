// Get the share tooltip element
const tooltip = document.querySelector('.share .tooltip');

// Add click event listener to share button
document.querySelector('.share').addEventListener('click', function () {
    // Toggle the visibility of the tooltip
    if (tooltip.style.display === 'none' || tooltip.style.display === '') {
        tooltip.style.display = 'flex';
    } else {
        tooltip.style.display = 'none';
    }
});
