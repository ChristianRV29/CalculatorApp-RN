import {useState, useRef} from 'react';

enum Operators {
  add,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [operatorNumber, setOperatorNumber] = useState('0');
  const [previosNumber, setPreviosNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const cleanNumber = () => {
    setOperatorNumber('0');
    setPreviosNumber('0');
  };

  const buildNumber = (numberText: string) => {
    if (operatorNumber.includes('.') && numberText === '.') {
      return;
    }
    if (operatorNumber.startsWith('0') || operatorNumber.startsWith('-0')) {
      if (numberText === '.') {
        setOperatorNumber(operatorNumber.concat(numberText));
      } else if (numberText === '0' && operatorNumber.includes('.')) {
        setOperatorNumber(operatorNumber.concat(numberText));
      } else if (numberText !== '0' && !operatorNumber.includes('.')) {
        setOperatorNumber(numberText);
      } else if (numberText === '0' && !operatorNumber.includes('.')) {
        setOperatorNumber(operatorNumber);
      } else {
        setOperatorNumber(operatorNumber.concat(numberText));
      }
    } else {
      setOperatorNumber(operatorNumber.concat(numberText));
    }
  };

  const positiveNegative = () => {
    if (operatorNumber.includes('-')) {
      setOperatorNumber(operatorNumber.replace('-', ''));
    } else {
      setOperatorNumber('-'.concat(operatorNumber));
    }
  };

  const delNumber = () => {
    if (
      operatorNumber.length === 1 ||
      (operatorNumber.length === 2 && operatorNumber.includes('-'))
    ) {
      return setOperatorNumber('0');
    }
    setOperatorNumber(num => num.slice(0, -1));
  };

  const castPreviousNumber = () => {
    if (operatorNumber.endsWith('.')) {
      setPreviosNumber(operatorNumber.slice(0, -1));
    } else {
      setPreviosNumber(operatorNumber);
    }

    setOperatorNumber('0');
  };

  const btnOperation = (operator: string) => {
    castPreviousNumber();
    switch (operator) {
      case '/':
        lastOperation.current = Operators.divide;
        break;
      case '*':
        lastOperation.current = Operators.multiply;
        break;
      case '-':
        lastOperation.current = Operators.substract;
        break;
      case '+':
        lastOperation.current = Operators.add;
        break;
    }
  };

  const calculate = () => {
    const number1 = Number(operatorNumber);
    const number2 = Number(previosNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setOperatorNumber(`${number1 + number2}`);
        break;
      case Operators.substract:
        setOperatorNumber(`${number2 - number1}`);
        break;
      case Operators.multiply:
        setOperatorNumber(`${number1 * number2}`);
        break;
      case Operators.divide:
        setOperatorNumber(`${number2 / number1}`);
        break;
      default:
        break;
    }
    setPreviosNumber('0');
  };

  return {
    operatorNumber,
    previosNumber,
    cleanNumber,
    btnOperation,
    calculate,
    delNumber,
    positiveNegative,
    buildNumber,
  };
};
