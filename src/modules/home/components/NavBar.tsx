import { Navbar, NavbarContent, NavbarItem, Link } from '@nextui-org/react';

//! make selection of selected item in navbar

const NavBar = () => {
  return (
    <div>
      <Navbar>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link color="foreground" href="/">
              Додати новий гайд
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/command" color="foreground">
              Керування командою
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/partner" color="foreground">
              Керування партнерами
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavBar;
