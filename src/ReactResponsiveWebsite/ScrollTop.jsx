import { useEffect, useState } from "react";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './ResponsiveWebsite.css';

const ScrollTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true)
            }
            else {
                setShowTopBtn(false)
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    console.log(showTopBtn);
    return (
        <>
        <div className="top-to-btm">
            {
                
                showTopBtn && (
                    <ArrowUpwardIcon className="icon-position icon-style" onClick={goToTop} />
                    )
            }
        </div>
        </>
    )
}

export default ScrollTop