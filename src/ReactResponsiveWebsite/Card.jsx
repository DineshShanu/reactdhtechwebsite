import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img className="card-img-top " src={props.imgsrc} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text" style={{ color: "#6c757d" }}>{props.cardtext}</p>
                        <NavLink to="/" className="btn card-btn">{props.btntext}</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;