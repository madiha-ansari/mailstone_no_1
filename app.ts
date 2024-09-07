let toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
let skillsSection = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', () => {
  if (skillsSection.style.display === 'none') {
    skillsSection.style.display = 'block';
  } else {
    skillsSection.style.display = 'none';
  }
});

