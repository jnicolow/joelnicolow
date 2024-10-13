// Fetch projects from JSON file and create cards
async function loadProjects() {
    try {
        const response = await fetch('projects/projects.json'); // Path to your JSON file
        const projects = await response.json();

        const projectsContainer = document.getElementById('projects-container');

        projects.forEach(project => {
            // Create card for each project
            const card = document.createElement('div');
            card.classList.add('project-card');

            // Create thumbnail image
            const img = document.createElement('img');
            img.src = project.thumbnail;
            img.alt = project.title;
            img.classList.add('project-thumbnail');

            // Create title and description
            const title = document.createElement('h3');
            title.innerText = project.title;
            const description = document.createElement('p');
            description.innerText = project.description;

            // Append elements to card
            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(description);

            // Append card to the projects container
            projectsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

// Call the function to load projects
loadProjects();
