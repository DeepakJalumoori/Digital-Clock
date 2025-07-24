function updateClock() {
  const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true, 
  });

  const dateString = now.toDateString();
  document.getElementById('time').textContent = timeString;
  document.getElementById('date').textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();

const toggleTheme = document.getElementById('toggle-theme');
const themeLabel = document.getElementById('theme-label');

toggleTheme.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  if (document.body.classList.contains('light')) {
    themeLabel.textContent = 'Light Mode';
  } else {
    themeLabel.textContent = 'Dark Mode';
  }
});
