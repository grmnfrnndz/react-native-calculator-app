import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';

enum Operator {
    sum, subtract,  multiply, divide
}


export const useCalculator = () => {
    
    const [valuePrev, setValuePrev] = useState('0');
    const [value, setValue] = useState('-1');
    const lastResultRef = useRef<Operator>();

    const onClear = () => {
        setValue('0');
        setValuePrev('0');
    }

    const onCreateValue = (valueText:string) => {
        // valida only separator point
        if (value.includes('.') && valueText === '.') return;

        if (value.startsWith('0') || value.startsWith('-0')) {
            // separator point
            if(valueText === '.') {
                setValue(value + valueText);    
            // if other cero and exist point
            } else if (valueText === '0' && value.includes('.')) {
                setValue(value + valueText);
            // if different of cero and value without point
            } else if (valueText !== '0' && !value.includes('.')) {
                setValue(valueText);
            // not acept 0000.00
            } else if (valueText == '0' && !value.includes('.')) {
                setValue(value);
            } else {
                setValue(value + valueText);
            }
        } else {
            setValue(value + valueText);
        }
    }

    const onPositiveNegative = () => {
        if (value.includes('-')) {
            setValue(value.replace('-', ''));
            return;
        }
        setValue('-' + value);
    }

    const onDeleteValue = () => {
        if (value === '0') return;

        if (value.includes('-') && value.length == 2) {
            setValue('0');
        } else if (value.length > 1) {
            setValue(value.substring(0, value.length - 1));
        } else {
            setValue('0');
        }
    }

    const onValueForPrev = () => {
        if(value.endsWith('.')) {
            setValuePrev(value.slice(0, -1));
        } else {
            setValuePrev(value);
        }
        setValue('0');
    }


    const onDivide = () => {
        onValueForPrev();
        lastResultRef.current = Operator.divide;
    }

    const onMultiply = () => {
        onValueForPrev();
        lastResultRef.current = Operator.multiply;
    }

    const onSubtract = () => {
        onValueForPrev();
        lastResultRef.current = Operator.subtract;
    }

    const onSum = () => {
        onValueForPrev();
        lastResultRef.current = Operator.sum;
    }

    const calculate = () => {

        const operator1 = Number(value);
        const operator2 = Number(valuePrev);

        switch(lastResultRef.current) {
            case Operator.sum:
                setValue(`${operator1 + operator2}`);
                break;
            case Operator.subtract:
                setValue(`${operator2 - operator1}`);
                break;
            case Operator.multiply:
                setValue(`${operator1 * operator2}`);
                break;
            case Operator.divide:
                setValue(`${operator2 / operator1}`);
                break;
        }

        setValuePrev('0');

    }
    
    
    return {
        value,
        valuePrev,
        onClear,
        onCreateValue,
        onPositiveNegative,
        onDeleteValue,
        onDivide,
        onMultiply,
        onSubtract,
        onSum,
        calculate,
    }
}
