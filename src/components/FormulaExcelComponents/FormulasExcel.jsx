export const FormulaExcelRutBeneficiario = ({ cantidad }) => {
    const elementos = [];

    for (let i = 2; i < cantidad; i++) {
        elementos.push(`=SI(Nómina!$B$${i}<>"";Nómina!$B$${i};"")`);
    }

    return (
        <ul>
            {elementos.map((elemento, index) => (
                <li key={index}>{elemento}</li>
            ))}
        </ul>
    );
};
export const FormulaExcelRutBeneficiario2 = ({ cantidad }) => {
    const elementos = [];

    for (let i = 2; i < cantidad; i++) {
        elementos.push(`=SI(Nómina!$C$${i}<>"";Nómina!$C$${i};"")`);
    }

    return (
        <ul>
            {elementos.map((elemento, index) => (
                <li key={index}>{elemento}</li>
            ))}
        </ul>
    );
};

export const FormulaExcelRutUsuario = ({cantidad}) => {
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

export const FormulaExcelEstado = ({cantidad}) => {
    const elementos = [];

    for (let i = 2; i < cantidad; i++) {
        elementos.push(`=SI($L$${i}<>"";"R: Resuelto";"")`);
    }
    
    return (
        <ul>
            {elementos.map((elemento, index) => (
                <li key={index}>{elemento}</li>
            ))}
        </ul>
    );
}

export const FormulaExcelTexto = ({cantidad, texto}) => {
    const elementos = [];

    for (let i = 2; i < cantidad; i++) {
        elementos.push(`=SI($L$${i}<>"";"${texto}";"")`);
    }
    
    return (
        <ul>
            {elementos.map((elemento, index) => (
                <li key={index}>{elemento}</li>
            ))}
        </ul>
    );
}

export const FormulaExcelDescripcion = ({cantidad}) => {
    const elementos = [];

    for (let i = 2; i < cantidad; i++) {
        elementos.push(`=SI($L$${i}<>"";"Con fecha " & TEXTO($A$${i};"dd/mm/aaaa") & " se ha generado como ingreso entrega de beneficio, asociado a la ayuda social correspondiente al mes de  " & MINUSC(Nómina!$J$${i}) & " por el monto de $"&Nómina!$L$${i}&" por concepto de "&Nómina!$K$${i}&". Depositados a la cuenta de "& NOMPROPIO(Nómina!$E$${i})&".";"")`);
    }
    
    return (
        <ul>
            {elementos.map((elemento, index) => (
                <li key={index}>{elemento}</li>
            ))}
        </ul>
    );
}

export const FormulaExcelDescripcion2 = ({cantidad}) => {
    const elementos = [];

    for (let i = 2; i < cantidad; i++) {
        elementos.push(`=SI($L$${i}<>"";"Afiliado asiste hoy "&TEXTO($A$${i};"dd/mm/aaaa")&" al Club Don Guillermo. Se reembolsará (a través de nómina) $"& TEXTO(Nómina!$K$${i};"#.##0") & " por concepto de locomoción a cuenta de "&NOMPROPIO(Nómina!$F$${i});"")`);
    }
    
    return (
        <ul>
            {elementos.map((elemento, index) => (
                <li key={index}>{elemento}</li>
            ))}
        </ul>
    );
}

export const FormulaExcelFecha = ({cantidad}) => {
    const elementos =[]

    for(let i = 2;i<cantidad;i++){
        elementos.push(`=SI($L$${i}<>"";Nómina!$B$${i};"")`)
    }

    return (
        <ul>
            {
                elementos.map((elemento,index) => (
                    <li key={index}>{elemento}</li>
                ))
            }
        </ul>
    )
}




/* 
="Afiliado asiste hoy "&TEXTO(INDICE(Nómina!B:B;COINCIDIR(L2;Nómina!C:C;0));"dd/mm/aaaa")&" al Club Don Guillermo. Se reembolsará (a través de nómina) $2.000 por concepto de locomoción a cuenta de "&NOMPROPIO(BUSCARV(L2;Nómina!C:F;4;FALSO)) */

export const FormulaExcelTrabajadorCDG = ({cantidad}) => {
    const output = []
    

    for (let i = 2; i<cantidad;i++){
        output.push(`=SI(Nómina!$C$${i}<>"";SI(Nómina!$A$${i}<>"CONYUGE";Nómina!$C$${i};Nómina!$E$${i});"")`)
    }
    return (
        <ul>
            {output.map((element,index) =>(
                <li key={index}>{element}</li>
            ))}
        </ul>
    )
}

export const FormulaExcelDescripcionCDG = ({cantidad}) =>{
    const output = []

    for(let i =2;i<cantidad;i++){
        output.push(`=SI($L$${i}<>"";SI(Nómina!$A$${i}<>"CONYUGE";"Afiliado asiste hoy "&TEXTO($A$${i};"dd/mm/aaaa")&" al Club Don Guillermo. Se reembolsará (a través de nómina) $"& TEXTO(Nómina!$K$${i};"#.##0") & " por concepto de locomoción a cuenta de "&NOMPROPIO(Nómina!$F$${i})&".";"Cónyuge " & NOMPROPIO(Nómina!$D$${i}) &" rut "& Nómina!$C$${i} & " del afiliado "& NOMPROPIO(Nómina!$F$${i}) &" asiste hoy "&TEXTO($A$${i};"dd/mm/aaaa")&" al Club Don Guillermo. Se reembolsará (a través de nómina) $"& TEXTO(Nómina!$K$${i};"#.##0") & " por concepto de locomoción a cuenta de "& NOMPROPIO(Nómina!$F$${i})&".");"")`)
    }

    return (
        <ul>
            {
                output.map((element,index) => (
                    <li key={index}>{element}</li>
                ))
            }
        </ul>
    )
}