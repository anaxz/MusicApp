import { useState, useEffect } from 'react';

function useWindowSize() {  
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
        mobile: undefined
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                mobile: window.innerWidth <= 768
            });
        }
        
        // hooks can handle this but using this for simplicity
        window.addEventListener("resize", handleResize);
        
        handleResize();
        // resests/wipes out data
        // clear useEffect
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};

export default useWindowSize

// hooks always at the top
// above is example of how to do a custom hooks
// assignment ^^