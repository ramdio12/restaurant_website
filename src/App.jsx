import Navbar from "./Components/Navbar"
import ScrollToTop from "./Components/ScrollToTop"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Specialties from "./Pages/Specialties"

function App() {


  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Home />
      <About />
      <Specialties />
      <Contact />
    </>
  )
}

export default App
