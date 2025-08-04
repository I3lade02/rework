const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 text-white fixed top-0 w-full z-10">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-8">
          <li>
            <a href="#about" className="hover:text-blue-400 transition duration-300">O mně</a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-blue-400 transition duration-300">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition duration-300">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;