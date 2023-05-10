function toggleDarkMode() {
    const toggleButton = document.querySelector('#dark-mode-toggle');
    const body = document.querySelector('body');
    const link = document.querySelector('a');

    body.classList.toggle('dark-mode');
    toggleButton.classList.toggle('dark-mode')
    link.classList.toggle('dark-mode');
}