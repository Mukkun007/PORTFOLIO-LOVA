const Biographie = () => {
  return (
    <>
      <div className="biographie flex flex-wrap ml-[140px] mr-[220px] mt-10">
        <div className="w-full md:w-1/5 p-4 flex justify-center items-center">
          <div className="w-[10rem] h-[10rem] border-4 border-[#00bcd4] rounded-full"></div>
        </div>
        <div className="w-full md:w-3/5 p-4">
          <h2 className="font-bold text-3xl">Biographie</h2>
          <h3 className="mt-5 text-xl leading-relaxed mr-[50px] text-gray-300">
            Experienced with
            <span className="font-bold text-white hover:text-[#00bcd4] transition-colors duration-300">
              {" "}
              Symfony
            </span>{" "}
            in my first professional year, currently focused on
            <span className="font-bold text-white hover:text-[#ff495d] transition-colors duration-300">
              {" "}
              UX/UI design
            </span>{" "}
            and passionate about creating user-friendly experiences while
            exploring new technologies like
            <span className="font-bold text-white hover:text-[#ff495d] transition-colors duration-300">
              {" "}
              React
            </span>{" "}
            and
            <span className="font-bold text-white hover:text-[#00bcd4] transition-colors duration-300">
              {" "}
              Agile
            </span>
            .
          </h3>
        </div>
        <div className="w-full md:w-1/5 p-4">
          <h2 className="font-bold text-3xl">Lets Connect</h2>
          <div className="reseaux flex space-x-4 mt-5">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-4xl text-white"></i>{" "}
              {/* Instagram */}
            </a>
            <a
              href="https://www.linkedin.com/in/fitahiana-lova-andrianomenjanahary-676509273/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-4xl text-white"></i>{" "}
              {/* LinkedIn */}
            </a>
            <a
              href="https://wa.me/+261344806190"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp text-4xl text-white"></i>{" "}
              {/* WhatsApp */}
            </a>
            <a
              href="https://github.com/Mukkun007"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-4xl text-white"></i>{" "}
              {/* GitHub */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Biographie;
