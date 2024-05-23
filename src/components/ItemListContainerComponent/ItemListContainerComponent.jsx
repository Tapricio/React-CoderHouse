import React from "react";

const ItemListContainerComponent = ({greeting}) => {
    const customStyle = {
        color: "white",
        fontSize: "2rem",
        margin: "auto"
    }
    
    return (
        <div style={customStyle}> 
            {greeting}
        </div>
    )
};

export default ItemListContainerComponent
/* 
return
    (
        <div style={customStyle}>
        {greeting}
        </div>
    ); */