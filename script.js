const yearNode = document.getElementById('year');
const toggleBtn = document.getElementById('theme-toggle');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleBtn.textContent = isDark ? '☀️ 日间模式' : '🌙 夜间模式';
  });
}
