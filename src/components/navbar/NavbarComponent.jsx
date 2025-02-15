import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";
const NavbarComponent = () => {
  return (
    <>
      {/* bg-[#16A1DF] */}
      <nav className="w-full bg-green-400">
        <Navbar fluid className=" bg-green-400 max-w-[80%] mx-auto ">
          <Navbar.Brand>
            <Link to="/" className="flex items-center">
              <img
                src="../src/assets/photo_2025-01-11_09-21-40-removebg-preview.png"
                alt="Logo"
                className="w-15 h-16 object-cover"
              />
            </Link>
          </Navbar.Brand>

          <div className="flex md:order-2 items-center space-x-4">
            <Link to="/login">
              <Button className="border-1  hover:bg-blue-500 text-white font-suwannaphum">
                ចូលគណនី
              </Button>
            </Link>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <NavLink
              to="/book"
              className={({ isActive }) =>
                `font-suwannaphum text-2xl font-medium  text-gray-700 ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              សៀវភៅ
            </NavLink>
            <NavLink
              to="/lesson"
              className={({ isActive }) =>
                `font-suwannaphum text-2xl font-medium  text-gray-700 ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              មេរៀន
            </NavLink>
            <NavLink
              to="/schoolPage"
              className={({ isActive }) =>
                `font-suwannaphum text-2xl font-medium  text-gray-700 ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              សាលារៀន
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `font-suwannaphum text-2xl font-medium  text-gray-700 ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              បណ្ណាល័យ
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `font-suwannaphum text-2xl font-medium  text-gray-700 ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              អំពីយើង
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </>
  );
};

export default NavbarComponent;
