import React from "react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Terms of Service", href: "" },
  { label: "Privacy Policy", href: "" },
  { label: "Contact Us", href: "" },
];

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center w-full border-t border-gray-600 border-opacity-40">
      <div className="container px-4 lg:px-40 py-3 lg:py-6 flex flex-col justify-center items-center w-full gap-2 lg:gap-3">
        <section className="flex justify-center items-center w-full">
          <p className="text-sm lg:text-base font-bold">
            © {new Date().getFullYear()} BookAI. All rights reserved.
          </p>
        </section>
        <section className="flex justify-center items-center w-full">
          <nav className="flex justify-center items-center flex-col lg:flex-row gap-4 lg:gap-8 text-nowrap">
            <div className="flex justify-center items-start lg:items-center flex-wrap gap-x-4 gap-y-2 lg:gap-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm lg:text-base font-semibold transition-all duration-300 hover:text-[#8a2be2]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
