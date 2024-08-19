import React, { useState } from "react";

const TareaComponent = () =>{
    const [cantidad,setCantidad]=useState(0)
    const [error, setError] = useState(null)
    const [stock, setStock] = useState(10)
    const estilos = {        
        backgroundColor:'red'
    }
    const modificar=(props)=>{
        if(!props){
            return setError("error, no props")
        }
        switch (props.tipo){
            case "sumar":
                if(stock>0){
                    return setCantidad(cantidad+1),setError(null),setStock(stock-1)
                }else{
                    return setError("no quedan articulos para sumar a la lista")
                }            
            case "restar":
                if(cantidad>0){
                    return setCantidad(cantidad-1),setError(null),setStock(stock+1)
                }else{
                    return setError("no quedan articulos para restar a la lista")
                }
                
        }
    }
    
    return (
        <div>
            <span>STOCK: {stock}</span><br/>
            <button onClick={() => modificar({tipo:"restar"})}>-</button>{cantidad}<button onClick={() =>modificar({tipo:"sumar"})}>+</button><br/>
            <span style={estilos}>{error}</span>
        </div>
    )
}

export default TareaComponent