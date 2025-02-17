const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="logo">
        <h1 className="text-4xl font-semibold">
          Lova <span className="text-accent">.</span>
        </h1>
      </div>
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
      </ul>
    </nav>
  );
};

export default Header;
