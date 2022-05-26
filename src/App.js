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
import RequireAuth from "./components/RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Dashboard/Dashboard";
import MyProfile from "./components/Dashboard/MyProfile";
import MyOrder from "./components/Dashboard/MyOrder";
import AddReview from "./components/Dashboard/AddReview";
import ManageOrders from "./components/Dashboard/ManageOrders";
import RequireAdmin from "./components/RequireAuth/RequireAdmin";
import UpdateProfile from "./components/Dashboard/UpdateProfile";
import AddProduct from "./components/Dashboard/AddProduct";

function App() {
  return (
    <div className="bg-slate-100 font-mono">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio" element={<Protfolio />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route path="/dashboard/myOrder" element={<MyOrder />} />
          <Route path="/dashboard/addReview" element={<AddReview />} />
          <Route path="/dashboard/updateProfile" element={<UpdateProfile />} />
          <Route
            path="/dashboard/manageOrders"
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          />
          <Route
            path="/dashboard/addProduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="/reviews" element={<AllReviews />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>

      <Footer className="absolute bottom-0" />
      <ToastContainer />
    </div>
  );
}

export default App;
