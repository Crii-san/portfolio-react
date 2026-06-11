import { useParams, useNavigate } from 'react-router-dom';
import { mockProjects } from '../data/mockData';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const projectId = id ? Number(id) : NaN;
  const project = mockProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="flex-1 w-full flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold font-playfair mb-4">Project not found</h1>
        <button onClick={() => navigate('/')} className="text-[#FDC435] font-semibold underline">
          Go back home
        </button>
      </main>
    );
  }

  return (
    <main className="flex-1 w-full max-w-4xl mx-auto py-12 px-6">
      <button 
        onClick={() => navigate('/')} 
        className="mb-8 text-gray-600 hover:text-black font-nunito flex items-center gap-2 transition-colors"
      >
        ← Back to Projects
      </button>

      <div className="w-full h-[400px] rounded-2xl overflow-hidden mb-8 shadow-md">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>

      <h1 className="text-4xl font-bold text-gray-900 font-playfair mb-4">{project.title}</h1>
      <div className="w-20 h-1 bg-[#FDC435] mb-6 rounded" />
      
      <p className="text-gray-600 font-nunito text-xl leading-relaxed text-justify">
        {project.description}
      </p>
    </main>
  );
}