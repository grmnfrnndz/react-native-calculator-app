import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

type MyGrey = '#2D2D2D';
type MyOrange = '#FF9427';
type MyGreyLight = '#9B9B9B';

type Color = MyGrey |  MyOrange | MyGreyLight;


interface Props {
    text: string,
    color?: Color,
    anchor?: boolean,
    action: (value: string) => void
}

export const ButtonCalc = ({text, action, color = '#2D2D2D', anchor = false}: Props) => {
    return (
        <TouchableOpacity
        onPress={() => action(text) }
        >
            <View style={{
                ...styles.button, 
                backgroundColor: color, width: (anchor) ? ((styles.button.width * 2) + (styles.button.marginHorizontal * 2)): styles.button.width
                }}>
                <Text style={{
                    ...styles.buttonText,
                    color: (color === '#9B9B9B') ? 'black' : 'white',
                    }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
