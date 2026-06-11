import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import ProjectDetail from './pages/ProjectDetail';

const Main = lazy(() => import('./pages/Main'));
const About = lazy(() => import('./pages/About'));
const Contacts = lazy(() => import('./pages/Contacts'));
const Login = lazy(() => import('./pages/Login'));
//const AdminProjects = lazy(() => import('./pages/AdminProjects'));

const PageLoader = () => (
  <div className="flex-1 flex items-center justify-center bg-[#F9FAFF]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FDC435]"></div>
  </div>
);


function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Route>

        <Route path="/login" element={<Login />} />

        {/* Zone Protégée Admin */}
        {/*
        <Route path="/admin/projects" element={
          <ProtectedRoute>
            <AdminProjects />
          </ProtectedRoute>
        } /> */}
      </Routes>
    </Suspense>
  );
}

export default App;