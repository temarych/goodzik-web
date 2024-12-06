import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { RootState } from '@/store';
import { Header } from '@components/Header';

const MainSection = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex-[2_1_auto] mx-[12%] p-8 border-2 border-gray-400/50 rounded-2xl flex flex-col gap-12">
        <div>
          <p className="text-xl">{user?.userName}</p>
          <p className="text-sm text-gray-400/80">{user?.email}</p>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default MainSection;
