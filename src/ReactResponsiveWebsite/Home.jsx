import React from "react";
import img from "../ReactResponsiveWebsite/Images/D_Logo.jpg";
import Common from "./Common";

const Home = () => {
    document.title = "Home";
    return (
        <>
            <Common
                name='Hello, This is'
                brandName='Dinesh Kumar'
                message="I'm a Professional Senior Software Engineer."
                imgsrc={img}
                visit="/contact"
                btnname="Contact" />
        </>
    )
}

export default Home;