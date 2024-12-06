import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar>
        <NavbarContent className="hidden sm:flex flex-col items-start gap-4">
          <NavbarItem isActive={location.pathname === '/'}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-primary' : 'text-foreground'
              }
            >
              Додати новий гайд
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive={location.pathname === '/command'}>
            <NavLink
              to="/command"
              className={({ isActive }) =>
                isActive ? 'text-primary' : 'text-foreground'
              }
            >
              Керування командою
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive={location.pathname === '/partner'}>
            <NavLink
              to="/partner"
              className={({ isActive }) =>
                isActive ? 'text-primary' : 'text-foreground'
              }
            >
              Керування партнерами
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive={location.pathname === '/location'}>
            <NavLink
              to="/location"
              className={({ isActive }) =>
                isActive ? 'text-primary' : 'text-foreground'
              }
            >
              Керування локаціями
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive={location.pathname === '/delete_guide'}>
            <NavLink
              to="/delete_guide"
              className={({ isActive }) =>
                isActive ? 'text-primary' : 'text-foreground'
              }
            >
              Видалення гайдів
            </NavLink>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavBar;
