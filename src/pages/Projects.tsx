import Project from "../components/children/Project.tsx";
import type { ProjectType } from "../types/index.ts";

function Projects() {
  const projects: ProjectType[] = [
    {
      id: 1,
      title: 'Project Name',
      description:
        'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
      image: '/assets/projects/woman.jpg',
    },
    {
      id: 2,
      title: 'Project Name',
      description:
        'What was your role, your deliverables, if the project was personal, freelancing.',
      image: '/assets/projects/calendar.jpg',
    },
    {
      id: 3,
      title: 'Project Name',
      description:
        'You can also add in this description the type of the project, if it was for web, mobile, electron.',
      image: '/assets/projects/phone.jpg',
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center px-6 md:px-16 lg:px-40 font-nunito pb-10"
    >
      <div className="flex flex-col items-center">
        <h3 className="text-[48px] font-bold text-[#25282B] font-playfair">
          Projects
        </h3>

        <div className="w-25 h-1 bg-[#FDC435] mt-2 mb-10" />
      </div>

      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.title}
          description={project.description}
          image={project.image}
          reverse={index % 2 === 1}
        />
      ))}
    </section>
  );
}

export default Projects;