import React from 'react';
import 'react-native-gesture-handler';
import { View, Text ,Button, StatusBar,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screen/Home/Home';
import ProductDetails from './src/screen/ProductDetaills/ProductDetails'
const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle='dark-content'/>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />

                <Stack.Screen name="Details" component={ProductDetails} />
            </Stack.Navigator>    
        </NavigationContainer>
    );
}



export default App;