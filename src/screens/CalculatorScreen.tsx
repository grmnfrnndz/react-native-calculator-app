import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonCalc } from '../components/ButtonCalc';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

    const {
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
        calculate
    } = useCalculator();


    return (
        <View style={styles.calculatorContainer}>
            {
                (valuePrev !== '0') && (
                    <Text style={styles.resultPrev}>{valuePrev}</Text>
                )
            }
            
            <Text style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{value}</Text>

            <View style={styles.row}>
                {/* button component */}
                <ButtonCalc text='C' color='#9B9B9B' action={onClear}/>
                <ButtonCalc text='+/-' color='#9B9B9B' action={onPositiveNegative}/>
                <ButtonCalc text='DEL' color='#9B9B9B' action={onDeleteValue}/>
                <ButtonCalc text='/' color='#FF9427' action={onDivide}/>
            </View>
            <View style={styles.row}>
                <ButtonCalc text='7' action={onCreateValue}/>
                <ButtonCalc text='8' action={onCreateValue}/>
                <ButtonCalc text='9' action={onCreateValue}/>
                <ButtonCalc text='X' color='#FF9427' action={onMultiply}/>
            </View>
            <View style={styles.row}>
                <ButtonCalc text='4' action={onCreateValue}/>
                <ButtonCalc text='5' action={onCreateValue}/>
                <ButtonCalc text='6' action={onCreateValue}/>
                <ButtonCalc text='-' color='#FF9427' action={onSubtract}/>
            </View>
            <View style={styles.row}>
                <ButtonCalc text='1' action={onCreateValue}/>
                <ButtonCalc text='2' action={onCreateValue}/>
                <ButtonCalc text='3' action={onCreateValue}/>
                <ButtonCalc text='+' color='#FF9427' action={onSum}/>
            </View>
            <View style={styles.row}>
                <ButtonCalc text='0' anchor action={onCreateValue}/>
                <ButtonCalc text='.' action={onCreateValue}/>
                <ButtonCalc text='=' color='#FF9427' action={calculate}/>
            </View>
        </View>
    )
}
