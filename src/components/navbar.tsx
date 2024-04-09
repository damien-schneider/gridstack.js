import React, { useState } from 'react';
import LogoFull from './brand/LogoFull';

const NavigationMenu = {
  Demo: './#demo',
  'Getting Started': './#getting-started',
  Documentation: '/documentation',
  Examples: '/examples',
  Changes: './#changes',
  Slack:
    'https://join.slack.com/t/gridstackjs/shared_invite/zt-27q0rwf80-5vCt81Z_hfVgpRW7L17MnQ',
  Github: 'https://github.com/gridstack/gridstack.js',
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" w-full fixed z-50 border-b-2 border-gray-500 bg-white">
      <div className="flex justify-between items-center w-full px-4 h-16">

          <a href="/" className="h-10">
            <LogoFull />
          </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4">
          {Object.entries(NavigationMenu).map(([key, value]) => (
            <li key={key}>
              <a href={value}>{key}</a>
            </li>
          ))}
        </ul>
        <button className="btn-secondary-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-github"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
          Github
        </button>
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-menu"
            >
              <line
                x1="4"
                x2="20"
                y1="12"
                y2="12"
              />
              <line
                x1="4"
                x2="20"
                y1="6"
                y2="6"
              />
              <line
                x1="4"
                x2="20"
                y1="18"
                y2="18"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-4 p-4">
          {Object.entries(NavigationMenu).map(([key, value]) => (
            <li key={key}>
              <a href={value}>{key}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
