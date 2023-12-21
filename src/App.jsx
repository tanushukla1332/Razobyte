import Header from "./Components/Navbar/Navbar";
import { Route,Routes } from "react-router";
import Home from './Components/Home/Home'
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Login from "./Components/Login/Login";


export default function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />}/>
      <Route path="/cart" element={<Login />} />
    </Routes>
      </>
        
  );
}