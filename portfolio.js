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
document.addEventListener("DOMContentLoaded", () => {
        const navLinks = document.querySelectorAll("nav ul li a");
        navLinks.forEach(link => {
          if (link.href === window.location.href) {
            link.classList.add("active");
          }
        });
        navLinks.forEach(link => {
          link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
            }
          });
        });
      });
