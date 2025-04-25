// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Dynamically load portfolio projects
    const projects = [
        { title: 'Project One', description: 'Description for project one' },
        { title: 'Project Two', description: 'Description for project two' },
        { title: 'Project Three', description: 'Description for project three' }
    ];

    const projectsContainer = document.querySelector('.projects');
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectItem);
    });
});