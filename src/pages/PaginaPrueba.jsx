import React, {useEffect, useState} from "react"; 
import UserList from "../components/UsersComponent/UserList";

const PaginaPrueba = () => {
    const [buttonText, setButtonText] = useState('presioname')
    const [contador, setContador] = useState(0)
    const aumentar = () => {
        if(stock>0){
            setContador(contador+1)
            setStock(stock-1)
        }
    }
    const disminuir = () => {
        if(stock >= 0 && contador>0){
            setContador(contador-1)
            setStock(stock+1)
        }
    }
    const [stock, setStock] = useState(10)

    

    const mostrarUsers = (users) => {console.log(users)}
 
    return(
        <div>
            <p>{buttonText}</p>
            <button onClick={() => setButtonText('Verde')}>Verde</button>
            <button onClick={() => setButtonText('Rojo')}>Rojo</button>
            <button onClick={() => setButtonText('Azul')}>Azul</button>
           
            
            
            <div>
                <span>Item count activity</span>
                <div>
                    <div>Stock {stock}</div>
                    <button onClick={disminuir}>-</button>{contador}<button onClick={aumentar}>+</button>
                </div>

            </div>

            <div>
                <h1>Lista de usuarios:</h1>
                <UserList/>
            </div>
        </div>

    )

}

export default PaginaPrueba
