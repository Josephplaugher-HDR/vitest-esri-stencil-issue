import { useLocation } from "react-router";
import { useEffect } from "react";

export default function useUrlHash() {
    const { hash } = useLocation();

    useEffect(() => {
        const element = document.getElementById(hash.slice(1));
        const offset = 75;
        element ? window.scrollTo({
            behavior: 'smooth',
            top: element.getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset,
        })
            : window.scrollTo(0, 0);
    }, [hash.slice(1)]);
}