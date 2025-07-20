function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const timeFormat = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const format = (n) => (n < 10 ? '0' + n : n);
  const timeString = `${format(hours)}:${format(minutes)}:${format(seconds)} ${timeFormat}`;
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
