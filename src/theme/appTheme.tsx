import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    background: {
       flex: 1,
       backgroundColor: 'black',
       
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        // backgroundColor: 'red',
        justifyContent: 'flex-end'
    },
    resultPrev: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 30,
        textAlign: 'right'
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    button: {
        width: 80,
        height: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    buttonText: {
        textAlign: 'center', 
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },


});