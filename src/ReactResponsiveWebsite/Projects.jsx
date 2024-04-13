import React from 'react'
import Card from "./Card";
import { Myprojects } from "./Data/SData";

const Projects = () => {
    document.title = "Projects";
    return (
        <>
            <div className="my-4">
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <h2><strong className="text-uppercase brand-name">{"Projects"}</strong></h2>
                            <div className="row gy-4">
                                {
                                    Myprojects.map((val, index) => {
                                        return <Card
                                            key={index}
                                            imgsrc={val.imgsrc}
                                            title={val.title}
                                            btntext={val.btntext}
                                            siteUrl={val.siteUrl}
                                            cardtext={val.cardtext}
                                        />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
