import { Container } from "react-bootstrap"
import Home from "./pages/Home"
import NavbarComponent from "./components/NavbarComponent"
import Introduction from "./pages/Introduction"
import Featured from "./pages/Featured"
import Categories from "./pages/Categories"
import Resources from "./pages/Resources"
import Mission from "./pages/Mission"
import Contact from "./pages/Contact"
import FooterComponent from "./components/FooterComponent"

function App() {

  return (
    <>
      <NavbarComponent/>
      <Home/>  
      <Introduction/>
      <Featured/>
      <Categories />
      <Resources/>
      <Mission/>
      <Contact/>
      <FooterComponent/>
    </>
  )
}

export default App
