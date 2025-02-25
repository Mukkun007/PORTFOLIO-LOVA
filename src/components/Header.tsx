const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4 max-w-4xl mx-auto">
      <ul className="flex space-x-6">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#biography">About Me</a>
        </li>
        <li>
          <a href="#about">Skills</a>
        </li>
        <li>
          <a href="#experience">Experiences</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#code">Code</a>
        </li>
        <li>
          <a
            href="/CV/Curriculum Vitae - LOVA.pdf"
            download="Lova_CV"
            // className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-full transition-all duration-300"
            className="text-white bg-[#0f172a] hover:bg-[#265b6b] hover:text-white py-2 px-4 rounded-full transition-all duration-300 border border-white"
          >
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
