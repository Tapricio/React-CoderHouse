const FormulaExcelRutBeneficiario = ({ cantidad }) => {
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

export default FormulaExcelRutBeneficiario