import React from "react";
import { Mydata } from "./SData";
import MyProfileCard from "./MyProfileCard";

const Developer = () => {
    return (
        <>
            <div className="my-5">
                <h2 className="text-center text-uppercase">My Profile</h2>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Developer;