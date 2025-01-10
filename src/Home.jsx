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
    <section className="px-4 md:px-8">
      <Hero/>
    </section>
    <section className="px-4 md:px-8">
      <About/>
    </section>
    <section className="px-4 md:px-8">
      <Services/>
    </section>
    <section>
      <MyWork/>
    </section>
    <section className="px-4 md:px-8">
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