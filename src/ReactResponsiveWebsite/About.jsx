import React from "react";
import { Mydata } from "./Data/SData";
import MyProfileCard from "./MyProfileCard";

const About = () => {
    document.title = "About";
    return (
        <>
            {
                Mydata.map((val, index) => {
                    return <MyProfileCard
                        key={index}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        btntext={val.btntext}
                        cardtext={val.cardtext}
                    />
                })
            }
        </>
    )
}

export default About;