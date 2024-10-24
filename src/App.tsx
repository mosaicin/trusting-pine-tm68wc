import { useState } from 'react';
import { Button, Input } from "/components/ui/button";

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousOperand, setPreviousOperand] = useState(null);

  const handleNumberClick = (number) => {
    if (display === '0') {
      setDisplay(number.toString());
    } else {
      setDisplay(display + number.toString());
    }
  };

  const handleOperatorClick = (newOperator) => {
    if (previousOperand !== null) {
      calculate();
    }
    setOperator(newOperator);
    setPreviousOperand(parseFloat(display));
    setDisplay('0');
  };

  const calculate = () => {
    let result;
    switch (operator) {
      case '+':
        result = previousOperand + parseFloat(display);
        break;
      case '-':
        result = previousOperand - parseFloat(display);
        break;
      case '*':
        result = previousOperand * parseFloat(display);
        break;
      case '/':
        result = previousOperand / parseFloat(display);
        break;
      default:
        return;
    }
    setDisplay(result.toString());
    setOperator(null);
    setPreviousOperand(null);
  };

  const handleClear = () => {
    setDisplay('0');
    setOperator(null);
    setPreviousOperand(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="text-right text-2xl mb-4">{display}</div>
        <div className="grid grid-cols-4 gap-2">
          <Button onClick={() => handleNumberClick(7)}>7</Button>
          <Button onClick={() => handleNumberClick(8)}>8</Button>
          <Button onClick={() => handleNumberClick(9)}>9</Button>
          <Button onClick={() => handleOperatorClick('/')}>/</Button>
          <Button onClick={() => handleNumberClick(4)}>4</Button>
          <Button onClick={() => handleNumberClick(5)}>5</Button>
          <Button onClick={() => handleNumberClick(6)}>6</Button>
          <Button onClick={() => handleOperatorClick('*')}>*</Button>
          <Button onClick={() => handleNumberClick(1)}>1</Button>
          <Button onClick={() => handleNumberClick(2)}>2</Button>
          <Button onClick={() => handleNumberClick(3)}>3</Button>
          <Button onClick={() => handleOperatorClick('-')}>-</Button>
          <Button onClick={() => handleNumberClick(0)}>0</Button>
          <Button onClick={() => handleNumberClick('.')}>.</Button>
          <Button onClick={calculate}>=</Button>
          <Button onClick={() => handleOperatorClick('+')}>+</Button>
        </div>
        <Button onClick={handleClear} className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white">
          Clear
        </Button>
      </div>
    </div>
  );
}