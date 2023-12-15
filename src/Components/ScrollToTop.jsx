import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scroll = document.documentElement.scrollTop;

        if (scroll >= 500) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <button
            className=" fixed bottom-12 right-12 bg-red-800 text-white text-3xl px-4 py-2 z-20"
            style={{ display: visible ? "inline" : "none" }}
            onClick={scrollTop}>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
};

export default ScrollToTop;
