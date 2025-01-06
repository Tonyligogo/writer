import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import WhyChooseMe from "./components/WhyChooseMe"
function App() {

  return (
          <main className="bg-dark text-white min-h-screen">
          <nav>
            <Navbar/>
          </nav>
          <div className="px-4 md:px-8">
          <section>
            <Hero/>
          </section>
          <section>
            <About/>
          </section>
          <section>
            <Services/>
          </section>
          <section>
            <WhyChooseMe/>
          </section>
          <footer>
            <Footer/>
          </footer>
          </div>
        </main>
  )
}

export default App