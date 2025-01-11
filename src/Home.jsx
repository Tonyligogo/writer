import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MyWork from "./components/MyWork"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import WhyChooseMe from "./components/WhyChooseMe"
function Home() {
  return (
    <main className="bg-dark text-white min-h-screen">
    <nav>
      <Navbar/>
    </nav>
    <div >
    <section id="#" className="px-4 md:px-8 ">
      <Hero/>
    </section>
    <section id="about" className="px-4 md:px-8 scroll-mt-8">
      <About/>
    </section>
    <section id="services" className="px-4 md:px-8 scroll-mt-24">
      <Services/>
    </section>
    <section id="my-work" className="scroll-mt-20">
      <MyWork/>
    </section>
    <section id="why-choose-me" className="px-4 md:px-8 scroll-mt-20 ">
      <WhyChooseMe/>
    </section>
    <footer>
      <Footer/>
    </footer>
    </div>
  </main>
  )
}

export default Home