import Project from '../Project/Project';

interface Project {
  name: string;
  description: string;
  image: string;
}

function Projects() {
  const projects: Project[] = [
    {
      name: 'Project Name',
      description:
        'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
      image: '/assets/projects/woman.jpg',
    },
    {
      name: 'Project Name',
      description:
        'What was your role, your deliverables, if the project was personal, freelancing.',
      image: '/assets/projects/calendar.jpg',
    },
    {
      name: 'Project Name',
      description:
        'You can also add in this description the type of the project, if it was for web, mobile, electron.',
      image: '/assets/projects/phone.jpg',
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center px-6 md:px-16 lg:px-40 font-nunito pb-50"
    >
      {/* Titre */}
      <div className="flex flex-col items-center">
        <h3 className="text-[48px] font-bold text-[#25282B] font-playfair">
          Projects
        </h3>

        <div className="w-25 h-1 bg-[#FDC435] mt-2 mb-10" />
      </div>

      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          image={project.image}
          reverse={index % 2 === 1}
        />
      ))}
    </section>
  );
}

export default Projects;