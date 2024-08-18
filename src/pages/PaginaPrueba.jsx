import React, {useRef, useState} from "react"; 
import Item from "../components/Item"
/* import FormulaExcelRutBeneficiario from "../components/FormulaExcelComponents/FormulaExcelRutBeneficiario";
import FormulaExcelRutUsuario from "../components/FormulaExcelComponents/FormulaExcelRutUsuario"; */
import {FormulaExcelDescripcionCDG,FormulaExcelTrabajadorCDG,FormulaExcelRutBeneficiario2,FormulaExcelDescripcion2,FormulaExcelFecha,FormulaExcelRutBeneficiario,FormulaExcelRutUsuario, FormulaExcelEstado,FormulaExcelTexto,FormulaExcelDescripcion} from "../components/FormulaExcelComponents/FormulasExcel"

const PaginaPrueba = () => {
    const [buttonText, setButtonText] = useState('presioname')
    const arreglo = ['test1','test2','test 3','test 4']
    const divRef = useRef(null)

    const [estado,setEstado] = useState(0)

    const handleClick = () => {
        divRef.current.innerHTML = 'nuevo contenido'
    }

    const renderCount = useRef(0);
    const [count, setCount] = useState(0);

    
    /* =SI($L$2<>"";"32996032-3";"") */
    /* renderCount.current++; */
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
        
        </div>
    )

}

export default PaginaPrueba




