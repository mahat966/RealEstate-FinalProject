import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home/Home.component";
import { Footer } from "./common/footer/Footer.component";
import { Header } from "./common/header/Header.component";
import Contact from "./Contact/Contact.component";
import About from "./About/About.component";
import Design from "./Design/Design.component";
import NavBar from "./Navbar/NavBar.component";
import Gallery from "./Gallery/Gallery.component";

import BuyList from "./Buy/List/BuyList.component";
import Properties from "./Buy/Properties/Properties.component";
import Login from "./Admin/Login/Login.component";
import { Dashboard } from "./Admin/Dashboard/Dashboard.component";
import BuyContent from "./Admin/BuyContent/BuyContent.component";
import DashboardContent from "./Admin/Dashboard/DashboardContent";
import DesignContent from "./Admin/DesignContent/DesignContent.component";
import GalleryContent from "./Admin/GalleryContent/GalleryContent.component";

// view

import viewBuyContent from "./Admin/BuyContent/ViewBuy.component";
import ViewGalleryContent from "./Admin/GalleryContent/ViewGalleryContent.component";
import viewDesignContent from "./Admin/DesignContent/ViewDesignContent.component";

import viewContact from "./Admin/ContactContent/ViewContact.component";
import ContactContent from "./Admin/ContactContent/Contact.component";
import BathroomDesign from "./Design/DesignImages/BathroomDesign/Bathroom.component";
import BedroomDesign from "./Design/DesignImages/BedroomDesign/Bedroom.component";
import HomeDesign from "./Design/DesignImages/HomeDesign/HomeDesign.component";
import KitchenDesign from "./Design/DesignImages/KitchenDesign/KitchenDesign.component";
import LivingRoomDesign from "./Design/DesignImages/LivingRoomDesign/LivingRoomDesign.component";

const NotFound = (props) => {
  return (
    <div className="error-page">
      <img src="images/blank.jpg" alt="error" />
    </div>
  );
};

export const AdminPublicRoute = ({ restricted, component: Comp, ...rest }) => {
  let admin = JSON.parse(localStorage.getItem("admin"));
  return (
    <Route
      {...rest}
      component={(props) =>
        restricted ? (
          admin.isAdmin ? (
            <Redirect to="/dashboard" {...props} />
          ) : (
            <Comp {...props} />
          )
        ) : (
          <Comp {...props} />
        )
      }
    />
  );
};

const AdminRoute = ({ component: Component, ...rest }) => {
  let admin = JSON.parse(localStorage.getItem("admin"));
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        admin.isAdmin ? (
          <div>
            <div className="main">
              <Dashboard />
              <Component {...routeProps} />
            </div>
          </div>
        ) : (
          <Login />
        )
      }
    ></Route>
  );
};

const Router = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <div>
          <div className="fullbody">
            <div className="main">
              <Header />
              <NavBar />
              <Component {...routeProps} />
              <Footer />
            </div>
          </div>
        </div>
      )}
    ></Route>
  );
};

export const AppRouting = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Router exact path="/" component={Home}></Router>

        <Router exact path="/home" component={Home}></Router>
        <Router exact path="/contact" component={Contact}></Router>
        <Router exact path="/about" component={About}></Router>
        <Router exact path="/design" component={Design}></Router>

        <Router
          exact
          path="/bathroomDesign"
          component={BathroomDesign}
        ></Router>
        <Router exact path="/bedroomDesign" component={BedroomDesign}></Router>
        <Router exact path="/homeDesign" component={HomeDesign}></Router>
        <Router exact path="/kitchenDesign" component={KitchenDesign}></Router>
        <Router
          exact
          path="/livingRoomDesign"
          component={LivingRoomDesign}
        ></Router>

        <Router exact path="/gallery" component={Gallery}></Router>

        <Router exact path="/buyList" component={BuyList}></Router>
        <Router exact path="/properties/:id" component={Properties}></Router>

        {/* Admin panel */}

        <AdminPublicRoute
          path="/admin"
          restricted={false}
          exact
          component={Login}
        />

        <AdminRoute
          exact
          path="/dashboard"
          component={DashboardContent}
        ></AdminRoute>

        <AdminRoute
          exact
          path="/viewDesignContent"
          component={viewDesignContent}
        ></AdminRoute>
        <AdminRoute
          exact
          path="/designContent"
          component={DesignContent}
        ></AdminRoute>
        <AdminRoute
          exact
          path="/designContent/:id"
          component={DesignContent}
        ></AdminRoute>

        <AdminRoute
          exact
          path="/viewbuycontent"
          component={viewBuyContent}
        ></AdminRoute>
        <AdminRoute
          exact
          path="/buycontent"
          component={BuyContent}
        ></AdminRoute>
        <AdminRoute
          exact
          path="/buycontent/:id"
          component={BuyContent}
        ></AdminRoute>

        <AdminRoute
          exact
          path="/viewGalleryContent"
          component={ViewGalleryContent}
        ></AdminRoute>
        <AdminRoute
          exact
          path="/galleryContent"
          component={GalleryContent}
        ></AdminRoute>

        <AdminRoute
          exact
          path="/viewContact"
          component={viewContact}
        ></AdminRoute>
        <AdminRoute
          exact
          path="/contact/:id"
          component={ContactContent}
        ></AdminRoute>

        <Router component={NotFound}></Router>
      </Switch>
    </BrowserRouter>
  );
};
