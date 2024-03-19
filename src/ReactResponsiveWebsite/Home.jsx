import React from "react";
import img from "../ReactResponsiveWebsite/Images/D_Logo.jpg";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common
                name='Grow your business with'
                brandName='DH Tech'
                message='We are the team of talented developer making websites'
                imgsrc={img}
                visit="/service"
                btnname="Get Started" />
        </>
    )
}

export default Home;