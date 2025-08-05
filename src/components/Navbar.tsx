const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 text-white fixed top-0 w-full z-10">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-8">
          {/* Dynamický odkaz pro "O mně" */}
          <li>
            <a 
              href="#about" 
              className={`hover:text-blue-400 transition-colors duration-300 ${window.location.hash === '#about' ? 'text-blue-400 border-b-2 border-blue-400 pb-1' : ''}`}
            >
              O mně
            </a>
          </li>
          
          {/* Dynamický odkaz pro "Portfolio" */}
          <li>
            <a 
              href="#portfolio" 
              className={`hover:text-blue-400 transition-colors duration-300 ${window.location.hash === '#portfolio' ? 'text-blue-400 border-b-2 border-blue-400 pb-1' : ''}`}
            >
              Portfolio
            </a>
          </li>
          
          {/* Dynamický odkaz pro "Kontakt" */}
          <li>
            <a 
              href="#contact" 
              className={`hover:text-blue-400 transition-colors duration-300 ${window.location.hash === '#contact' ? 'text-blue-400 border-b-2 border-blue-400 pb-1' : ''}`}
            >
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;