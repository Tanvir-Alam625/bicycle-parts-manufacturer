import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login";
import Reset from "./components/Login/Reset";
import Protfolio from "./components/Protfolio/Protfolio";
import Purchase from "./components/Purchase/Purchase";
import AllReviews from "./components/AllReviews/AllReviews";
import Signup from "./components/Login/Signup";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="bg-slate-100 font-mono">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio" element={<Protfolio />} />
        <Route path="/purchase/:id" element={<Purchase />} />
        <Route path="/reviews" element={<AllReviews />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer className="absolute bottom-0" />
    </div>
  );
}

export default App;
