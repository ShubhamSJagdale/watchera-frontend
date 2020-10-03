import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import AboutUs from "./Pages/AboutUs";
import LatestProducts from "./Pages/LatestProducts";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

// import Signup from "./user/Signup";
// import Signin from "./user/Signin";
// import AdminRoute from "./auth/helper/AdminRoutes";
// import PrivateRoute from "./auth/helper/PrivateRoutes";
// import UserDashBoard from "./user/UserDashBoard";
// import AdminDashBoard from "./user/AdminDashBoard";
// import AddCategory from "./admin/AddCategory";
// import ManageCategories from "./admin/ManageCategories";
// import AddProduct from "./admin/AddProduct";
// import ManageProducts from "./admin/ManageProducts";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/latestproductdetails" exact component={LatestProducts} />
        <Route path="/contactus" exact component={ContactUs} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />

        {/* <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
        <AdminRoute
          path="/admin/categories"
          exact
          component={ManageCategories}
        />
        <AdminRoute path="/admin/create/product" exact component={AddProduct} />

        <AdminRoute path="/admin/products" exact component={ManageProducts} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
