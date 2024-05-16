import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="w-100 bg-light text-center footer mt-2">
                Copyright © {year} My Portfolio
            </footer>
        </>
    )
}

export default Footer;