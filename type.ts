// Function to toggle the visibility of an element by its ID
function toggleSection(sectionId: string, buttonId: string, showText: string, hideText: string): void {
    const section = document.getElementById(sectionId) as HTMLDivElement;
    const button = document.getElementById(buttonId) as HTMLButtonElement;

    if (section.style.display === 'none') {
        section.style.display = 'block';
        button.textContent = hideText;
    } else {
        section.style.display = 'none';
        button.textContent = showText;
    }
}

// Set up event listeners for the toggle buttons
document.getElementById('togglePersonalInfo')?.addEventListener('click', () => {
    toggleSection('personalInfoSection', 'togglePersonalInfo', 'Show Personal Info', 'Hide Personal Info');
});

document.getElementById('toggleEducation')?.addEventListener('click', () => {
    toggleSection('educationSection', 'toggleEducation', 'Show Education', 'Hide Education');
});

document.getElementById('toggleExperience')?.addEventListener('click', () => {
    toggleSection('experienceSection', 'toggleExperience', 'Show Work Experience', 'Hide Work Experience');
});

document.getElementById('toggleSkills')?.addEventListener('click', () => {
    toggleSection('skillsSection', 'toggleSkills', 'Show Skills', 'Hide Skills');
});
