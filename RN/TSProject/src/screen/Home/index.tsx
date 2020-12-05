import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {homeModel} from '../../components/ListData/Properties';

interface Props{
    navigation : homeModel;
}

const Home = (props : Props) => {
    const {navigation} = props;
    return(
        <View>
            <Text>Home page</Text>
            <Button
                title='Go to page patient'
                onPress ={() => navigation.navigate('Patient')}
            />
        </View>
    )
}
const Patient = () => {
    return(
        <View>
            Page patient
        </View>
    )
}
const Stack = createStackNavigator();

const HomeScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}>
                <Stack.Screen name='Patient' component={Patient}>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default HomeScreen;