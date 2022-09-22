import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');
    const [decimal, setDecimal] = useState(false);
    const [result, setResult] = useState(false);
    const [historic, setHistoric] = useState('');

    const handleOnClear = () => {
        setCurrentNumber('0')
        setFirstNumber('0')
        setOperation('')
        setDecimal(false);
        setHistoric('');
    };

    const handleAddNumber = (num) => {
        if (result === true) {
            setResult(false);
            setCurrentNumber(num);
        } else {
            setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
        }
    }

    const handleSumNumbers = () => {
        if (firstNumber === '0') {
            setFirstNumber(currentNumber);
            setOperation('+');
            setCurrentNumber('0');
            setHistoric(currentNumber + '+');
        } else {
            if (result === false) {
                const resultSum = Number(firstNumber) + Number(currentNumber);
                setResult(true);
                setOperation('+');
                setFirstNumber(String(resultSum));
                setCurrentNumber(String(resultSum));
                setHistoric(firstNumber + '+' + currentNumber + '+' + String(resultSum));
            }
        }
        setDecimal(false);
    }

    const handleMinusNumbers = () => {
        if (firstNumber === '0') {
            setFirstNumber(currentNumber);
            setOperation('-');
            setCurrentNumber('0');
            setHistoric(currentNumber + '-');
        } else {
            if (result === false) {
                const resultSum = Number(firstNumber) - Number(currentNumber);
                setResult(true);
                setOperation('-');
                setFirstNumber(String(resultSum));
                setCurrentNumber(String(resultSum));
                setHistoric(firstNumber + '-' + currentNumber + '=' + String(resultSum));
            }
        }
        setDecimal(false);
    }

    const handleMultiplicationNumbers = () => {
        if (firstNumber === '0') {
            setFirstNumber(currentNumber);
            setOperation('x');
            setCurrentNumber('0');
            setHistoric(currentNumber + 'x');
        } else {
            if (result === false) {
                const resultSum = Number(firstNumber) * Number(currentNumber);
                setResult(true);
                setOperation('x');
                setFirstNumber(String(resultSum));
                setCurrentNumber(String(resultSum));
                setHistoric(firstNumber + 'x' + currentNumber + '=' + String(resultSum));
            }
        }
        setDecimal(false);
    }

    const handleDivisionNumbers = () => {
        if (firstNumber === '0') {
            setFirstNumber(currentNumber);
            setOperation('/');
            setCurrentNumber('0');
            setHistoric(currentNumber + '/');
        } else {
            if (result === false) {
                const resultSum = Number(firstNumber) + Number(currentNumber);
                setResult(true);
                setOperation('/');
                setFirstNumber(String(resultSum));
                setCurrentNumber(String(resultSum));
                setHistoric(firstNumber + '/' + currentNumber + '=' + String(resultSum));
            }
        }
        setDecimal(false);
    }

    const handlePercentNumbers = () => {
        if (firstNumber === '0') {
            setFirstNumber(currentNumber);
            setOperation('%');
            setCurrentNumber('0');
            setHistoric(currentNumber + '%');
        } else {
            if (result === false) {
                const resultSum = (Number(firstNumber) / 100) * Number(currentNumber);
                setResult(true);
                setOperation('%');
                setFirstNumber(String(resultSum));
                setCurrentNumber(String(resultSum));
                setHistoric(firstNumber + '%' + currentNumber + '=' + String(resultSum));
            }
        }
        setDecimal(false);
    }

    const handleFractionNumbers = () => {
        const resultSum = 1 / (Number(currentNumber));
        setCurrentNumber(String(resultSum));
        setHistoric("1/" + currentNumber + '=' + String(resultSum));
        setDecimal(false);
    }

    const handleEquals = () => {
        if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
            switch (operation) {
                case '+':
                    handleSumNumbers();
                    break;
                case '-':
                    handleMinusNumbers();
                    break;
                case 'x':
                    handleMultiplicationNumbers();
                    break;
                case '/':
                    handleDivisionNumbers();
                    break;
                case '%':
                    handlePercentNumbers();
                    break;
                default:
                    break;
            }
            setResult(true);
            setFirstNumber('0');
        }
    }

    const handleDecimal = () => {
        if (decimal === false && currentNumber !== '0') {
            const x = Number(currentNumber);
            if (!(x % 1 !== 0 && !isNaN(x % 1))) {
                handleAddNumber('.');
                setDecimal(true);
            }
        }
    }

    return (
        <Container>
            <Content>
                {console.log(firstNumber + '\n' + operation + '\n' + currentNumber + '\n' + result)}

                <Input value={historic} disable={true} />
                <Input value={currentNumber} />
                <Row>
                    <Button label='1/x' onClick={handleFractionNumbers} />
                    <Button label='CE' onClick={() => setCurrentNumber('0')} />
                    <Button label='C' onClick={handleOnClear} />
                    <Button label='/' onClick={handleDivisionNumbers} />
                </Row>
                <Row>
                    <Button label='7' onClick={() => handleAddNumber('7')} />
                    <Button label='8' onClick={() => handleAddNumber('8')} />
                    <Button label='9' onClick={() => handleAddNumber('9')} />
                    <Button label='x' onClick={handleMultiplicationNumbers} />
                </Row>
                <Row>
                    <Button label='4' onClick={() => handleAddNumber('4')} />
                    <Button label='5' onClick={() => handleAddNumber('5')} />
                    <Button label='6' onClick={() => handleAddNumber('6')} />
                    <Button label='-' onClick={handleMinusNumbers} />
                </Row>
                <Row>
                    <Button label='1' onClick={() => handleAddNumber('1')} />
                    <Button label='2' onClick={() => handleAddNumber('2')} />
                    <Button label='3' onClick={() => handleAddNumber('3')} />
                    <Button label='+' onClick={handleSumNumbers} />
                </Row>
                <Row>
                    <Button label='%' onClick={handlePercentNumbers} />
                    <Button label='0' onClick={() => handleAddNumber('0')} />
                    <Button label='.' onClick={() => handleDecimal()} />
                    <Button label='=' onClick={handleEquals} />
                </Row>
            </Content>
        </Container>
    )
}

export default App;