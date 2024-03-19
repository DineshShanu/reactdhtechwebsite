import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Menu from "./Menu";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import ContactUs from "./ContactUs";
import Developer from "./Developer";
import Error from "./Error";
import { Switch, Route } from "react-router-dom";
import "./ResponsiveWebsite.css";
import Footer from "./Footer";
const ResponsiveWebsite = () => {
    return (
        <>
            <Menu />
            <Switch>
                <Route exact path="/" component={() => <Home />} />
                <Route exact path="/service" render={() => <Service />} />
                <Route exact path="/about" render={() => <About />} />
                <Route exact path="/contactus" render={() => <ContactUs />} />
                <Route exact path="/developer" render={() => <Developer />} />
                <Route path="/" render={() => <Error />} />
            </Switch>
            <Footer />
        </>
    )
}

export default ResponsiveWebsite;