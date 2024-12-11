function toggleTheme() {
  const body = document.body;
  const sunIcon = document.getElementById('sun_icon');
  const moonIcon = document.getElementById('moon_icon');

  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
  } else {
    body.classList.add('dark-theme');
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
  }
}
