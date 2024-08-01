import { Container } from "react-bootstrap"
import Home from "./pages/Home"
import NavbarComponent from "./components/NavbarComponent"
import Introduction from "./pages/Introduction"
import Featured from "./pages/Featured"
import Categories from "./pages/Categories"

function App() {

  return (
    <>
      <NavbarComponent/>
      <Home/>  
      <Introduction/>
      <Featured/>
      <Categories />
    </>
  )
}

export default App
