import React, {useRef} from "react";

const ImageTogglerOnMouseOver = ({ primaryImg, secondaryImg }) => {
    /*
    * useRef
    * primarily used to allow directly to an elemento in the DOM
    *
    * on this example we change the SRC of the image element by ref on the DOM we created a ref for each img on the dom and we can change it's attributes
    * */

    const imageRef = useRef(null);

    return (
        <img onMouseOver={() => {
            imageRef.current.src = secondaryImg;
        }} onMouseOut={() => {
            imageRef.current.src = primaryImg;
        }}
            src={primaryImg}
            alt="" ref={imageRef}
        />
    );
};

export default ImageTogglerOnMouseOver;