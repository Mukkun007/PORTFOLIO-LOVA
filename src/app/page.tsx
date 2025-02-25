import CursorLight from "@/components/CursorLight";
import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import Biographie from "@/components/Biographie";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Code from "@/components/Code";
import ScrollToTop from "@/components/ScrollToTop";

export default function Page() {
  return (
    <div className="pagge">
      <CursorLight />
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="biography">
        <Biographie />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="code">
        <Code />
      </div>
      <div>
        <ScrollToTop />
      </div>
    </div>
  );
}
