import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <>
            <section>
                <div class="container">
                    <div class="text">
                        <h1>Page Not Found</h1>
                        <p>We can't seem to find the page you're looking for. Please check the URL for any typos.</p>
                        <ul className="menu mt-5">
                            <NavLink to="/" className="goto">back home</NavLink>
                        </ul>
                    </div>
                    <div>
                        <img class="image" src="https://omjsblog.files.wordpress.com/2023/07/errorimg.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error;