import React, { forwardRef, useRef } from "react";

const Button = forwardRef(({className, title, onClick}, ref) => {
    return(
        <button type="button" className={className} onClick={onClick} ref={ref}>{title}</button>
    )
});

Button.displayName = "Button";

export default Button;