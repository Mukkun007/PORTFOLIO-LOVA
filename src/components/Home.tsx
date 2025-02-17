import Biographie from "./Biographie";

const Home = () => {
  return (
    <>
      <main className="flex justify-between items-center">
        <div className="desc">
          <h1 className="font-light">
            Hi, I’m <span className="font-bold">Tahiana Lova</span>, a{" "}
            <span className="font-light text-[#00bcd4]">
              {" "}
              full-stack developer
            </span>{" "}
            with a passion for{" "}
            <span className="font-light text-[#ff495d]">
              {" "}
              web development
            </span>{" "}
            and <span className="font-light text-[#ff495d]"> design</span> . I
            have a background in{" "}
            <span className="font-light text-[#ff495d]"> computer science</span>
            , and I love collaborating with teams to create{" "}
            <span className="font-light text-[#00bcd4]">
              {" "}
              innovative solutions
            </span>
            . I'm eager to learn new technologies and share my knowledge with
            others. 🚀
          </h1>
        </div>
      </main>
      <Biographie />
    </>
  );
};

export default Home;
