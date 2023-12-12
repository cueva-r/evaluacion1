import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import H1 from './h1';
import './Calculadora.css'; // Importar el archivo CSS

const Calculator = () => {
    const [result, setResult] = useState(''); // Estado para almacenar el resultado

    const handleClick = (label) => {
        if (label === '=') {
            // Evaluar la expresión matemática
            try {
                setResult(eval(result).toString());
            } catch (error) {
                setResult('Error');
            }
        } else if (label === 'C') {
            // Limpiar el resultado
            setResult('');
        } else {
            // Actualizar la expresión matemática
            setResult(result + label);
        }
    };

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C',
    ];

    return (
        <div>
            <H1 />
            <div className='calculator'>
                <Display value={result} />
                <div className='button-container'>
                    {buttons.map((label) => (
                        <Button key={label} label={label} onClick={handleClick} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calculator;
