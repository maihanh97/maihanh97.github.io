import React, { Component, useState } from 'react';
import {
    StyleSheet,
    View,
    Text, 
    StatusBar,
    FlatList
} from 'react-native';
import Button from './components/Button';

const row1 =["7","8","9","x"];
const row2 =["4","5","6","-"];
const row3 =["1","2","3","+"];


const Row = ({arr}) => {
    return(
        <View style={{flexDirection:'row', flexWrap: 'wrap'}} >
            {arr.map((item) =>
                <Button 
                    text={item} 
                    onPress={ () => handleTap(isNaN(parseFloat(item)) ? "operator":"number",item)} 
                    theme={ isNaN(parseFloat(item))? "accent":"" }
                />
            )}
        </View>    
    )
}

const App = () => {
    const [currentValue,setCurrentValue] = useState("0");
    const [operator, setOperator] = useState(null);
    const [previousValue, setPreviousValue] = useState(null);

    handleNumber = (value)=>{
        if (currentValue === "0") {
            setCurrentValue(value)
        }
        else if(operator !== null){
            setCurrentValue(value)
        }
        else{
            setCurrentValue(`${currentValue}${value}`)    
        }
    };

    handleEqual = () => {
        const current = parseFloat(currentValue);
        const previous = parseFloat(previousValue);

        if (operator === "/") {
            setCurrentValue(`${previous / current}`)
        }
        
        if (operator === "*") {
            setCurrentValue(`${previous * current}`)
        }
        
        if (operator === "+") {
            setCurrentValue(`${previous + current}`)
        }
        if (operator === "-") {
            setCurrentValue(`${previous - current}`)
        }
    };
    calculator = (type, value) => {
        switch (type) {
            case "number":
                return handleNumber(value);
            case "operator":
                {
                    setOperator(value),
                    setPreviousValue(currentValue),
                    setCurrentValue(currentValue)
                    break;
                }
            case "equal":
                return handleEqual();
            case "clear":{
                setCurrentValue('0')
                break;
            }
            case "excep":
                setCurrentValue(`${parseFloat(currentValue)*-1}`)
                break;
            case "percentage":
                setCurrentValue(`${parseFloat(currentValue)*0.01}`)
                break;
            default: break;
        }
    };  

    handleTap = (type, value) => {calculator(type, value)};

    return (
        <View style = {styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.screenResult}>
                {`${parseFloat(currentValue) }`}
            </Text>

            <View style={{flexDirection:'row'}}>
                <Button
                    text="C"
                    theme="secondary"
                    onPress={() => handleTap("clear","C")}
                />
                <Button
                    text="+/-"
                    theme="secondary"
                    onPress={() => handleTap("excep","+/-")}
                />
                <Button
                    text="%"
                    theme="secondary"
                    onPress={() => handleTap("percentage","%")}
                />
                <Button
                    text="/"
                    theme="accent"
                    onPress={() => handleTap("operator", "/")}
                />
            </View>

            <Row arr={row1}/>
            <Row arr={row2}/>
            <Row arr={row3}/>

            <View style={{flexDirection: 'row'}}>
                <Button
                    text="0"
                    size="double"
                    onPress={() => handleTap("number", 0)}
                />
                <Button text="." onPress={() => handleTap("number", ".")} />
                <Button
                    text="="
                    theme="accent"
                    onPress={() => handleTap("equal")}
                />
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-end'
    },
    screenResult:{
        color: 'white',
        height : 150,
        fontSize: 50,
        textAlign: 'right',
        marginRight: 20
    },
});


export default App;
