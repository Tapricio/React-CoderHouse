import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

const CartWidgetComponent = () => {

    return (
        <>
        <FontAwesomeIcon icon={faCartShopping} style={{color:"white", fontSize:"1.5rem"}}/>
        <span style={{color:"white", fontSize:"1.5rem"}}>1</span>
        </>
    )
}

export default CartWidgetComponent
