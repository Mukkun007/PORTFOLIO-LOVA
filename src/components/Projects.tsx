const Projects = () => {
  return (
    <>
      <div className="project mt-[50px]">
        <h1 className="font-bold text-4xl text-white ml-[210px]">
          Notable Work
        </h1>
        <div className="flex flex-wrap ml-[210px] mr-[220px] mt-[10px]">
          <div className="w-full md:w-1/2 p-4 border-2 h-[280px]">col1</div>
          <div className="w-full md:w-1/2 p-4 mt-[-17px]">
            <h2 className="text-xl font-light">Web Developpment</h2>
            <h1 className="text-4xl font-bold mt-3">
              Banky Foiben’ny Madagasikara Intranet Upgrade
            </h1>
            <p className="mt-8 ">
              Migrated the intranet platform from Symfony 3.4 to 6.4,
              modernizing the codebase for better performance, security, and
              maintainability. The upgrade involved refactoring legacy code,
              optimizing database queries, and ensuring full compatibility with
              the latest Symfony features, all while minimizing disruptions for
              users.
            </p>
          </div>
          <button className="mt-5  border-2 p-2">
            <i className="fas fa-star"> See More</i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
