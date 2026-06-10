// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Select the elements
    const button = document.getElementById('action-btn');
    const heading = document.getElementById('main-heading');
    const subText = document.getElementById('sub-text');
    
    // 2. Define application state
    let isActive = false;

    // 3. Add event listener
    button.addEventListener('click', () => {
        isActive = !isActive; // Toggle state

        if (isActive) {
            // Update Text
            heading.textContent = 'System Active';
            subText.textContent = 'JavaScript successfully triggered state change.';
            button.textContent = 'Deactivate';

            // Update Tailwind Classes (Colors)
            heading.classList.replace('text-slate-800', 'text-emerald-600');
            button.classList.replace('bg-blue-600', 'bg-emerald-600');
            button.classList.replace('hover:bg-blue-700', 'hover:bg-emerald-700');
        } else {
            // Revert Text
            heading.textContent = 'Welcome';
            subText.textContent = 'This is a clean, modular starting point for your project.';
            button.textContent = 'Activate';

            // Revert Tailwind Classes (Colors)
            heading.classList.replace('text-emerald-600', 'text-slate-800');
            button.classList.replace('bg-emerald-600', 'bg-blue-600');
            button.classList.replace('hover:bg-emerald-700', 'hover:bg-blue-700');
        }
    });
});