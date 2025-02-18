import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import Biographie from "@/components/Biographie";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <div>
      <Header />
      <Home />
      <Biographie />
      <About />
      <Projects />
    </div>
  );
}
