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
            {/* <p>{buttonText}</p>
            <button onClick={() => setButtonText('Verde')}>Verde</button>
            <button onClick={() => setButtonText('Rojo')}>Rojo</button>
            <button onClick={() => setButtonText('Azul')}>Azul</button>
           
            
            <div>
                <Item array={arreglo}/>
            </div>

            <br />
            <div>
                <div ref={divRef}></div>
                <button onClick={handleClick}></button>
            </div>

            <div>
                <p>Re-render count: {renderCount.current}</p>
                <p>Count: {count}</p>
                <button onClick={() => renderCount.current++}>Incrementar</button>
                <button onClick={() => console.log(renderCount)}>clg count</button>
                <button onClick={() => setCount(renderCount.current++)}>setCount</button>
            </div>

            <div>
                <p>estado: {estado}</p>
                <button onClick={() => setEstado(prevEstado => prevEstado+1)}>actualizar estado-renderizar</button>
            </div> */}
            
            <div>
                
                
                {/* <FormulaExcelRutBeneficiario cantidad={5000}/> */}
                {/* <FormulaExcelRutBeneficiario2 cantidad={5000}/> */}
                {/* <FormulaExcelRutUsuario cantidad={5000}/> */}
                {/* <FormulaExcelTexto cantidad={5000} texto={"Asistencia Club Don Guillermo"}/> */}
                {/* <FormulaExcelDescripcion cantidad={5000}/> */}
                {/* <FormulaExcelDescripcion2 cantidad={5000}/> */}
                {/* <FormulaExcelFecha cantidad={5000}/> */}
                {/* <FormulaExcelTrabajadorCDG cantidad={5000}/> */}
                <FormulaExcelDescripcionCDG cantidad={5000}/>

            </div>
        
            
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




