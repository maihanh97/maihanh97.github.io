import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../../screen/Profile';
import HomeScreen from '../../screen/Home';
import { Image, Text, TouchableOpacity } from 'react-native';
import { BACK, CLOSE } from '../../assets';
import styles from './HomeStackScreen.style'
interface Props {
    navigation: any
}

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }: Props) => {
    const handleClose = () => navigation.navigate('Home');
    const handleGoBack = () => navigation.navigate('Home');

    return (
        <HomeStack.Navigator >
            <HomeStack.Screen name='Home' component={HomeScreen} options={{ headerTitle: 'Trang chủ' }} />
            <HomeStack.Screen
                name='Profile'
                component={Profile}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity style={styles.viewContainer} onPress={handleGoBack}>
                            <Image
                                source={BACK}
                                style={styles.back}
                            />
                            <Text style={styles.text}>Trở về</Text>
                        </TouchableOpacity>
                    ),
                    headerTitle: '',
                    headerRight: () => (
                        <TouchableOpacity style={styles.close} onPress={handleClose}>
                            <Image
                                source={CLOSE}
                            />
                        </TouchableOpacity>
                    ),
                    headerStyle: { backgroundColor: '#2d9cdb' }
                }}
            />
        </HomeStack.Navigator>
    );
}

export default HomeStackScreen;