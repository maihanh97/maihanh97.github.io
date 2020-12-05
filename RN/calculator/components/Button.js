import React from 'react';
import {StyleSheet,TouchableOpacity, Text,Dimensions} from 'react-native';

const screen = Dimensions.get('window').width;
const buttonWidth = screen/4;

const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontSize: 25
    },
    textSecondary: {
        color: "#060606"
    },
    button: {
        backgroundColor: "#333333",
        flex: 1,
        height: buttonWidth-15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: buttonWidth-15,
        margin: 5
    },
    buttonDouble: {
        width: screen/2 - 15,
        flex: 0,
        alignItems: "flex-start",
        paddingLeft: 40
    },
    buttonSecondary: {
        backgroundColor: "#a6a6a6"
    },
    buttonAccent: {
        backgroundColor: "#f09a36"
    }
});

const Button =({onPress,text,theme, size}) =>{
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    if (size === "double") {
        buttonStyles.push(styles.buttonDouble);
    } 
    if (theme === "secondary") {
        buttonStyles.push(styles.buttonSecondary);
        textStyles.push(styles.textSecondary);
    } else if (theme === "accent") {
        buttonStyles.push(styles.buttonAccent);
    }

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
    );
}



export default Button;