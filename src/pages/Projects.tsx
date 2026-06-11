import { useNavigate } from 'react-router-dom';
import { mockProjects } from '../data/mockData';
import Testimonials from '../components/children/Testimonials';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="w-full flex flex-col items-center py-20 bg-white">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-[48px] font-bold text-[#25282B] font-playfair m-0">
          Projects
        </h2>
        <div className="w-16 h-1 bg-[#FDC435] mt-2 rounded" />
      </div>

      <div className="w-full max-w-6xl flex flex-col gap-20 px-6">
        {mockProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-50"
          >
            <div className={`w-full md:w-1/2 space-y-6 p-8 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <h3 className="text-3xl font-bold text-[#25282B] font-playfair">
                {project.title}
              </h3>
              <p className="text-[#828282] font-nunito text-lg leading-relaxed">
                {project.description}
              </p>
              <button
                onClick={() => navigate(`/project/${project.id}`)}
                className="rounded-full border-2 border-[#25282B] px-6 py-2 font-roboto text-[16px] font-medium hover:bg-[#25282B] hover:text-white transition-colors"
              >
                View Project
              </button>
            </div>

            <div className="w-full md:w-1/2 h-[350px]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <Testimonials />
    </section>
  );
}