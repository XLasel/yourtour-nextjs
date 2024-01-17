import { useState, useEffect } from "react";

const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState("");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1280) {
                setDeviceType("desktop");
            } else if (width >= 1000) {
                setDeviceType("tablet");
            } else {
                setDeviceType("mobile");
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return deviceType;
};

export default useDeviceType;