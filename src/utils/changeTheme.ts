export const changeTheme = () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('theme', newTheme);
  localStorage.setItem('theme', newTheme);
}


