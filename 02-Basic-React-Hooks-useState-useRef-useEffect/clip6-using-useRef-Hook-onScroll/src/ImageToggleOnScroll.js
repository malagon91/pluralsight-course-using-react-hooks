import React, {useRef, useEffect, useState} from "react";

const ImageTogglerOnScroll = ({ primaryImg, secondaryImg }) => {

    const imageRef = useRef(null);
    const [isLoading,setIsLoading] = useState(true);
//we can clean the setting when component start and finish
    // my own words, on this hook we can set functions, run or change state when componentDidMount (init) and whn componentWillUnMount (finish)
    //also we can re-run this function passing args in the second argument
    useEffect(() => {
        // Effect function from first render
        // function that it's going execute after the component mounts
        window.addEventListener("scroll", scrollHandler);
        setInView(isInView());
        setIsLoading(false);
        return ( () => {
             //this function is going execute in componentunmount and in the function we are going to cleanup the listener
            window.removeEventListener("scroll", scrollHandler);
        });
    },[isLoading]);// Only re-run the effect if isloading changes

    const [inView,setInView] = useState(false);

    const isInView = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        // this function returns a bool if the component is totally in the screen
        return false;
    };

    const scrollHandler = () => {
        setInView(() => {
            return isInView();
        });
    };

    return isLoading ? null : (
        <img
            src={inView ? secondaryImg : primaryImg}
            alt="" ref={imageRef} width="200" height="200"
        />
    );
};

export default ImageTogglerOnScroll;