import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login";
import Protfolio from "./components/Protfolio/Protfolio";

function App() {
  return (
    <div className="bg-slate-100 font-mono">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio" element={<Protfolio />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
