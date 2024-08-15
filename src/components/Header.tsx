import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Button from "./ui/Button";
import ThemeToggleButton from "./ThemeToggleButton";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Features", href: "" },
  { label: "How It Works", href: "" },
  { label: "Roadmap", href: "" },
  { label: "API", href: "" },
  { label: "Price", href: "" },
  { label: "Models", href: "" },
];

const Header: React.FC = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenu(!isSideMenu);
  };

  const closeSideMenu = () => {
    setIsSideMenu(false);
  };
  return (
    <header className="flex justify-center items-center w-full backdrop-blur-lg shadow-sm fixed z-50">
      <div className="relative container px-4 lg:px-40 py-4 lg:py-6 flex justify-between items-center flex-col lg:flex-row">
        <div className="flex justify-between items-center w-full">
          <div className="">
            <a href={"/"} className="flex justify-center items-center gap-2">
              <img
                src={"./assets/images/logo.png"}
                alt="logo"
                className="object-contain w-8"
              />
              <p className="text-xl lg:text-3xl font-bold">BookAI</p>
            </a>
          </div>
          <div className="lg:hidden flex justify-center items-center gap-4">
            <ThemeToggleButton />
            <div className="text-3xl cursor-pointer" onClick={toggleSideMenu}>
              {isSideMenu ? <IoClose /> : <IoMenu />}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-end items-center gap-4 mt-0 h-full w-full">
          <Navbar closeSideMenu={closeSideMenu} />
          <ThemeToggleButton />
        </div>
        {isSideMenu && (
          <div className="relative lg:hidden flex justify-center items-start mt-4 pt-16 h-screen w-full">
            <div className="absolute top-0 w-full h-px bg-gradient-to-l from-transparent via-[#8a2be2] to-transparent"></div>
            <Navbar closeSideMenu={closeSideMenu} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

interface NavbarProps {
  closeSideMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ closeSideMenu }) => {
  return (
    <nav className="flex justify-center items-center flex-col lg:flex-row gap-4 text-nowrap">
      <div className="flex justify-center items-start lg:items-center flex-col lg:flex-row gap-4">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={() => closeSideMenu()}
            className="transition-all duration-300 hover:text-[#8a2be2]"
          >
            {item.label}
          </a>
        ))}
      </div>
      <a href={"/documents/document.pdf"} target="_blank">
        <Button text="Login/ Sign Up" />
      </a>
    </nav>
  );
};
