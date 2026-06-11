import { Outlet } from 'react-router-dom';
import Header from '../components/containers/Header';
import Footer from '../components/containers/Footer';

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen mx-24 bg-[#F9FAFF] relative">
      <Header />
      
      <div className="flex-1 w-full">
        <Outlet />
      </div>
      
      <Footer />
    </div>
  );
}