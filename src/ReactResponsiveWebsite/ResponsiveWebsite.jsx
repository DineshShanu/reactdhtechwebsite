import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Menu from "./Menu";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Developer from "./Developer";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import { Switch, Route, Redirect } from "react-router-dom";
import "./ResponsiveWebsite.css";
import Footer from "./Footer";
import ScrollToTop from "react-scroll-to-top";
const ResponsiveWebsite = () => {
    return (
        <>
            <ScrollToTop smooth color="#4799cd" className="icon-position icon-style" />
            <Menu />
            <Switch>
                <Route exact path="/" component={() => <Home />} />
                <Route exact path="/service" render={() => <Service />} />
                <Route exact path="/about" render={() => <About />} />
                <Route exact path="/experience" render={() => <Experience />} />
                <Route exact path="/skills" render={() => <Skills />} />
                <Route exact path="/projects" render={() => <Projects />} />
                <Route exact path="/contact" render={() => <Contact />} />
                <Route exact path="/developer" render={() => <Developer />} />
                {/* <Route path="/" render={() => <Error />} /> */}
                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    )
}

export default ResponsiveWebsite;