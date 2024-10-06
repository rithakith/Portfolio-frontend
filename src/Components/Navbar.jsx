import React from 'react';
// Import Heroicons
import { UserIcon, BriefcaseIcon, CheckBadgeIcon, StarIcon, HeartIcon, PencilIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <div className="fixed justify-center h-full w-20 flex flex-col items-center py-10 space-y-6 z-40">
      <NavItem label="About" href="#hero" icon={<UserIcon className="w-6 h-6" />} />
      <NavItem label="Education" href="#education" icon={<BriefcaseIcon className="w-6 h-6" />} />
      <NavItem label="Skills" href="#skills" icon={<CheckBadgeIcon className="w-6 h-6" />} />
      <NavItem label="Projects" href="#projects" icon={<StarIcon className="w-6 h-6" />} />
      <NavItem label="Blogs" href="#blogs" icon={<PencilIcon className="w-6 h-6" />} />

      <NavItem label="Passion" href="#passion" icon={<HeartIcon className="w-6 h-6" />} />
    </div>
  );
};


// Individual navigation item component
const NavItem = ({ label, href, icon }) => (
  <a
    href={href}
    className="group relative flex items-center ml-4"
  >
    {/* Background oval */}
    <span className="absolute top-1/2 flex items-center transform -translate-y-1/2 pl-20 px-8 border-colors-pink-1 border-2 text-colors-pink-1 py-2 left-0 h-16 bg-gradient-to-r from-gray-900 to-black rounded-full transition-transform duration-500 ease-in-out scale-0 group-hover:scale-100 z-0">
      {label}
    </span>
    
    {/* Icon */}
    <span className="w-16 h-16 bg-colors-pink-1 rounded-full flex items-center justify-center text-white transition-transform relative z-10 group-hover:animate-spin-on-hover group-hover:bg-pink-600">
      {icon}
    </span>
  </a>
);

export default Navbar;
