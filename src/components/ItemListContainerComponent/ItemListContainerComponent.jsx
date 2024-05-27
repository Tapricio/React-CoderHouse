import React from "react";

const ItemListContainerComponent = ({greeting}) => {
    const customStyle = {
        color: "white",
        fontSize: "2rem"
        
    }
    
    return (
        <div style={customStyle}> 
            {greeting}
        </div>
    )
};

export default ItemListContainerComponent
