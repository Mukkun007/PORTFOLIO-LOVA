export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <div className="logo">
          te<span>s</span>t .
        </div>
        <ul>
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
      <main>
        <div className="left">
          <h1>LOREM, ipsum</h1>
          <h2>Le Lorem Ipsum est sfswvsesddfwefefs</h2>
          <h3>
            Le Lorem Ipsum est simplement du faux texte employé dans la <br />
            composition et la mise en page avant impression Le Lorem Ipsum est{" "}
            <br />
            le faux texte standard de depuis les années 1500, quand un
            imprimeurbr <br />
            assembla ensemble des morceaux de texte pour réaliser un livre{" "}
            <br />
            spécimen de polices de texte.
          </h3>
          <button className="px-6 py-3 bg-[#FF495D] w-72 h-14 font-semibold rounded-lg shadow-md hover:bg-[#292B43] hover:text-[#FF495D] transition mt-10 ml-[320px] text-[#292B43]">
            Cliquez-moi
          </button>
        </div>
        <div className="right">
          <div className="w-1 bg-gray-300 h-[550px] mr-[320px]"></div>
          {/* Cercles */}
          <div className="absolute flex flex-col justify-between h-[550px] mr-[320px]">
            <div className="w-5 h-5 bg-[#FF495D] rounded-full border-2 border-[#FF495D]"></div>{" "}
            {/* Haut */}
            <div className="w-5 h-5 bg-[#292B43] rounded-full border-2 border-[#FF495D]"></div>{" "}
            {/* Milieu haut */}
            <div className="w-5 h-5 bg-[#292B43] rounded-full border-2 border-[#FF495D]"></div>{" "}
            {/* Milieu bas */}
            <div className="w-5 h-5 bg-[#292B43] rounded-full border-2 border-[#FF495D]"></div>{" "}
            {/* Bas */}
          </div>
        </div>
      </main>

      <section className="menu-deux" id="deux">
        <div className="menu-deux-left">
          <h1>Menu-Deux</h1>
        </div>
        <div className="menu-deux-right">
          <div className="w-1 bg-gray-300 h-[550px] mr-[320px]"></div>
          {/* Cercles */}
          <div className="absolute flex flex-col justify-between h-[550px] mr-[320px]">
            <div className="w-5 h-5 bg-[#292B43] rounded-full border-2 border-[#FF495D]"></div>{" "}
            {/* Haut */}
            <div className="w-5 h-5 bg-[#FF495D] rounded-full border-2 border-[#FF495D]"></div>{" "}
            {/* Milieu haut */}
            <div className="w-5 h-5 bg-[#292B43] rounded-full border-2 border-[#FF495D]"></div>{" "}
            {/* Milieu bas */}
            <div className="w-5 h-5 bg-[#292B43] rounded-full border-2 border-[#FF495D]"></div>{" "}
            {/* Bas */}
          </div>
        </div>
      </section>
    </div>
  );
}
