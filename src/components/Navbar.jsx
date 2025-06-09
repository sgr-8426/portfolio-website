import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, UserIcon, FolderIcon, AcademicCapIcon, 
         DocumentCheckIcon, CodeBracketIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const navItems = [
  { path: '/', icon: HomeIcon, label: 'Home' },
  { path: '/about', icon: UserIcon, label: 'About' },
  { path: '/projects', icon: FolderIcon, label: 'Projects' },
  { path: '/skills', icon: CodeBracketIcon, label: 'Skills' },
  { path: '/education', icon: AcademicCapIcon, label: 'Education' },
  { path: '/certifications', icon: DocumentCheckIcon, label: 'Certifications' },
  { path: '/contact', icon: EnvelopeIcon, label: 'Contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(null);

  return (    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <div className="glass-effect px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
        <ul className="flex items-center space-x-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}
                  onMouseEnter={() => setIsHovered(item.path)}
                  onMouseLeave={() => setIsHovered(null)}>
                <Link to={item.path} 
                      className="relative flex flex-col items-center">
                  <Icon className={`nav-icon ${
                    isActive ? 'text-primary-600 scale-110' : 'text-gray-600 dark:text-gray-300'
                  }`} />
                  
                  {/* Tooltip */}
                  {isHovered === item.path && (
                    <span className="absolute -bottom-8 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
