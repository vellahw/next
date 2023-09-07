// export default function Button({className, title, onClick}) {
//     return(
//         <button type="button" className={className} onClick={onClick}>{title}</button>
//     )
// }
import React, { forwardRef, useRef } from "react";

const Button = forwardRef(({className, title, onClick}, ref) => {
    return(
        <button type="button" className={className} onClick={onClick} ref={ref}>{title}</button>
    )
});

export default Button;