const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4 max-w-4xl mx-auto">
      <ul className="flex space-x-6">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#deux">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        {/* Nouveau bouton pour télécharger le CV */}
        <li>
          <a
            href="/CV/Curriculum Vitae - LOVA.pdf" // Remplace le chemin avec l'URL réelle de ton CV
            download="Lova_CV" // Nom du fichier lors du téléchargement
            className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-full transition-all duration-300"
          >
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
