import React from "react";


const Button = ({children, handelclick}) => {
    return(
        <button className="round" onClick={handelclick} >{children}</button>
        
    )
}

export default Button