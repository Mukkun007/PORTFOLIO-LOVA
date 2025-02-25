import CursorLight from "@/components/CursorLight";
import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import Biographie from "@/components/Biographie";
import Projects from "@/components/Projects";
import Code from "@/components/Code";

export default function Page() {
  return (
    <div className="relative">
      <CursorLight />
      <Header />
      <Home />
      <Biographie />
      <About />
      <Projects />
      <Code />
    </div>
  );
}
