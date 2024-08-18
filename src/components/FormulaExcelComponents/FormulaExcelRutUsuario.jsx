const FormulaExcelRutUsuario = ({cantidad}) => {
    const elementos = [];

    for (let i = 2; i < cantidad; i++) {
        elementos.push(`=SI($L$${i}<>"";"32996032-3";"")`);
    }
    
    return (
        <ul>
            {elementos.map((elemento, index) => (
                <li key={index}>{elemento}</li>
            ))}
        </ul>
    );
}

export default FormulaExcelRutUsuario