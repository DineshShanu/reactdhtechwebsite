import React from "react";

const MyProfileCard = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-7 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h2><strong className="brand-name text-uppercase">{props.title}</strong></h2>
                                    <p className="my-2" style={{ color: "#6c757d" }}><strong className="brand-name">Hello, </strong> {props.cardtext}</p>
                                    <div className="mt-2">
                                        <a href="mailto:dineshkumar9890@gmail.com" target="_blank" className="btn-sm btn-get-started" rel="noreferrer">{props.btntext}</a>&ensp;
                                        <a href="https://drive.google.com/file/d/1bpYzxgwmA71kTyPiPKcc6o7jAzAA-PKk/view?usp=sharing" target="_blank" className="btn-sm btn-get-started" rel="noreferrer">Resume</a>
                                    </div>
                                </div>

                                <div className="col-lg-5 order-1 order-lg-2">
                                    <img src={props.imgsrc} style={{ marginTop: "0px" }} className="img-fluid img-thumbnail" alt="Profile" />
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