import React from "react";

const MyProfileCard = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h2><strong className="brand-name text-uppercase">{props.title}</strong></h2>
                                    <p className="my-2" style={{ color: "#6c757d" }}><strong className="brand-name">Hello, </strong> {props.cardtext}</p>
                                    <div className="mt-3">
                                        <a href="mailto:dineshkumar9890@gmail.com" target="_blank" className="btn-get-started">{props.btntext}</a>&ensp;
                                        <a href="https://drive.google.com/file/d/1kSNfvYWf3ljpDvgF9Ct42yTe2GIBYk4q/view?usp=drive_link" target="_blank" className="btn-get-started">Resume</a>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid img-thumbnail" alt="Profile Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyProfileCard;