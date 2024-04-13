import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img className="card-img-top " src={props.imgsrc} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold text-uppercase brand-name">{props.title}</h5>
                        <p className="card-text" style={{ color: "#6c757d" }}>{props.cardtext ? props.cardtext.slice(0, 80)+"..." : ""}</p>
                        <a href={props.siteUrl} target="_blank" rel="noreferrer" className="btn card-btn">{props.btntext}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;