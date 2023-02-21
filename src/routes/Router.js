
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Reset from "../components/Login/Reset";
import Protfolio from "../components/Protfolio/Protfolio";
import Purchase from "../components/Purchase/Purchase";
import AllReviews from "../components/AllReviews/AllReviews";
import Signup from "../components/Login/Signup";
import Profile from "../components/Profile/Profile";
import RequireAuth from "../components/RequireAuth/RequireAuth";
import Dashboard from "../components/Dashboard/Dashboard";
import MyProfile from "../components/Dashboard/MyProfile";
import MyOrder from "../components/Dashboard/MyOrder";
import AddReview from "../components/Dashboard/AddReview";
import ManageOrders from "../components/Dashboard/ManageOrders";
import RequireAdmin from "../components/RequireAuth/RequireAdmin";
import UpdateProfile from "../components/Dashboard/UpdateProfile";
import AddProduct from "../components/Dashboard/AddProduct";
import Payment from "../components/Dashboard/Payment";
import MakeAdmin from "../components/Dashboard/MakeAdmin";
import ManageProducts from "../components/Dashboard/ManageProducts";
import NotFound from "../components/NotFound/NotFound";
import UpdateProduct from "../components/Dashboard/UpdateProduct";

function Router() {

 
  return (
    <div className="bg-slate-100 font-mono">
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
          <Route
            path="/dashboard/myOrder"
            element={
              <RequireAuth>
                <MyOrder />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard/addReview"
            element={
              <RequireAuth>
                <AddReview />
              </RequireAuth>
            }
          />

          <Route
            path="/dashboard/updateProfile"
            element={
              <RequireAuth>
                <UpdateProfile />
              </RequireAuth>
            }
          />
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
          <Route
            path="/dashboard/makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          />
          <Route
            path="/dashboard/manageProduct"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          />
          <Route
            path="/dashboard/manageProduct/:id"
            element={
              <RequireAdmin>
                <UpdateProduct />
              </RequireAdmin>
            }
          />
        </Route>
        <Route
          path="/payment/:id"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
