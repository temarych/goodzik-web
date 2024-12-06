import { Header } from '@components/Header';
import MainSection from '@modules/home/components/MainSection';

export const MainLayout = () => (
  <div className="flex flex-col h-screen">
    <Header />
    <MainSection />
  </div>
);
