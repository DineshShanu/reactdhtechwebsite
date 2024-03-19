import React from "react";
import img from "../ReactResponsiveWebsite/Images/D_Logo.jpg";
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common
                name=''
                brandName='About Us'
                message='Our Expertise in the Field. proficiency with the.NET framework, C#, and practical knowledge in creating and implementing.NET applications. Proficient in troubleshooting and problem-solving, with an understanding of software engineering best practices and principles. Knowledge of ASP.NET about web development, dedication to lifelong learning and keeping abreast of market developments, Proven capacity to adjust and make valuable contributions to development teams.'
                imgsrc={img}
                visit="/contactus"
                btnname="Contact Us" />
        </>
    )
}

export default About;