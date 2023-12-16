import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About';
import Service from "./Pages/Service";
import TempPage from "./Pages/temp";
function App() {

  return (
    <>  
      <Router>
        <Navbar />
        <Routes>
          <Route path="/adarshsavalagi.github.io-mechexcel/"  element={<HomePage />} />
          <Route path="/adarshsavalagi.github.io-mechexcel/about"  element={ <About/>} />
          <Route path="/adarshsavalagi.github.io-mechexcel/service"  element={ <Service/>} />
          <Route path="/adarshsavalagi.github.io-mechexcel/test"  element={ <TempPage/>} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
