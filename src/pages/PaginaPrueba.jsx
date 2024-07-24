import React, {useState} from "react"; 

const PaginaPrueba = () => {
    const [buttonText, setButtonText] = useState('presioname')
    return(
        <div>
            <p>{buttonText}</p>
            <button onClick={() => setButtonText('Verde')}>Verde</button>
            <button onClick={() => setButtonText('Rojo')}>Rojo</button>
            <button onClick={() => setButtonText('Azul')}>Azul</button>
            
        </div>
    )

}

export default PaginaPrueba
