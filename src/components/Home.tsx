import Biographie from "./Biographie";

const Home = () => {
  return (
    <>
      <main className="flex justify-between items-center">
        <div className="desc">
          <h1>
            Hi, I’m <span>Tahiana Lova</span>, a full-stack developer with a
            passion for web development and design. I have a background in
            computer science, and I love collaborating with teams to create
            innovative solutions. I'm eager to learn new technologies and share
            my knowledge with others. 🚀
          </h1>
        </div>
      </main>
      <Biographie />
    </>
  );
};

export default Home;
