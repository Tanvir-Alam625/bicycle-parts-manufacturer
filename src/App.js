import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routes/Router";

function App() {

 
  return (
    <div className="bg-slate-100 font-mono">
      <Header />
      <Router />
      <Footer className="absolute bottom-0" />
      <ToastContainer />
    </div>
  );
}

export default App;
