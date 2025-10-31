
export function initThemeToggle() {
  const toggleButton = document.getElementById('theme-toggle');
  if (!toggleButton) return;

  toggleButton.addEventListener('click', () => {
    const body = document.body;
    
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      toggleButton.innerHTML = '🌙';
      toggleButton.setAttribute('aria-label', 'Ativar modo escuro');
    } else {
      body.classList.add('dark-mode');
      toggleButton.innerHTML = '☀️';
      toggleButton.setAttribute('aria-label', 'Ativar modo claro');
    }
  });
}