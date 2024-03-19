import React from "react";
import Card from "./Card";
import SData from "./SData";

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h2 className="text-center text-uppercase">Our Services</h2>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                {
                                    SData.map((val, index) => {
                                        return <Card
                                            key={index}
                                            imgsrc={val.imgsrc}
                                            title={val.title}
                                            btntext={val.btntext}
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

export default Service;