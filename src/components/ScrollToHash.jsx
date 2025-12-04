import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToHash = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 50);
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [hash]);

    return null;
};
