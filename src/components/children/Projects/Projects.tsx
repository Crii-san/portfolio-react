import './Projects.css';
import Project from '../Project/Project';

interface Project {
    name: string,
    description: string,
    image: string
}

function Projects() {
    const projects: Project []= [
        {
            name: 'Project Name',
            description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
            image: '/assets/projects/woman.jpg'
        },
        {
            name: 'Project Name',
            description: 'What was your role, your deliverables, if the project was personal, freelancing.',
            image: '/assets/projects/calendar.jpg'
        },
        {
            name: 'Project Name',
            description: 'You can also add in this description the type of the project, if it was for web, mobile, electron.',
            image: '/assets/projects/phone.jpg'
        }
    ]
    return (
        <div className="projects">
            <h3>Projects</h3>
            {projects.map((project, index) => (
                <Project key={index} name={project.name} description={project.description} image={project.image}></Project>
            ))}
        </div>
    );
}

export default Projects;