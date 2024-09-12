var _a, _b, _c, _d;
// Function to toggle the visibility of an element by its ID
function toggleSection(sectionId, buttonId, showText, hideText) {
    var section = document.getElementById(sectionId);
    var button = document.getElementById(buttonId);
    if (section.style.display === 'none') {
        section.style.display = 'block';
        button.textContent = hideText;
    }
    else {
        section.style.display = 'none';
        button.textContent = showText;
    }
}
// Set up event listeners for the toggle buttons
(_a = document.getElementById('togglePersonalInfo')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    toggleSection('personalInfoSection', 'togglePersonalInfo', 'Show Personal Info', 'Hide Personal Info');
});
(_b = document.getElementById('toggleEducation')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    toggleSection('educationSection', 'toggleEducation', 'Show Education', 'Hide Education');
});
(_c = document.getElementById('toggleExperience')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    toggleSection('experienceSection', 'toggleExperience', 'Show Work Experience', 'Hide Work Experience');
});
(_d = document.getElementById('toggleSkills')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    toggleSection('skillsSection', 'toggleSkills', 'Show Skills', 'Hide Skills');
});
