import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Mainheader from "./components/Mainheader";
import "./App.css";

function App() {
  return (
    <div className=" overflow-y-scroll scroll-smooth">
      <Navbar></Navbar>

      <div className="flex justify-center items-center w-screen h-screen text-2xl font-medium font-sans">
        <Routes>
          <Route path="/" element={<Mainheader></Mainheader>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/skills" element={<Skills></Skills>}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
