import React, { useState, useRef } from 'react';
import 'react-native-gesture-handler';
import { View, Text, Button, StatusBar, TextInput, StyleSheet, Animated, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


interface Props {
    navigation: any
}

const App = (props: Props) => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const { navigation } = props;
    // const [isVisible, setIsVisible] = useState(false);
    // const [buttonRect, setButtonRect] = useState({});

    const HomeScreen = () => {
        return (
            <Button
                title='Sign up for Ecomedic'
                onPress={() => navigation.navigate('SignUp')}
            />

        )
    }
    const SignUp = () => {
        return (
            <View>
                <TextInput
                    placeholder='Email'
                    onChangeText={(value) => _onChangeEmail(value)}
                    value={email}
                />
                <TextInput
                    placeholder='Password'
                    onChangeText={(value) => _onChangePass(value)}
                    value={pass}
                />
                <Button
                    title='SignUp'
                    // onPress={() => {
                    //     if (_onSubmitForm()) return navigation.navigate('Popupover')
                    // }}
                    onPress={() => navigation.navigate('Popupover')}
                />
            </View>
        )
    }

    const _onChangeEmail = (value: any) => setEmail(value);
    const _onChangePass = (value: any) => setPass(value);

    const _checkEmail = (email: string) => {
        let regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (regEx.test(email)) {
            return true
        }
        return false;
    }

    const _onSubmitForm = () => {
        if (email === '') {
            Alert.alert('Email không được để trống.')
            return false;
        }
        if (pass === '') {
            Alert.alert('pass không được để trống.');
            return false;
        }
        if (pass.length < 8) {
            Alert.alert('pass có độ dài ít nhất 8 kí tự.')
            return false;
            ;
        }
        if (!_checkEmail(email)) {
            Alert.alert('Email không đúng.');
            return false;
        }
        return true;
    }

    return (
        <NavigationContainer>
            <StatusBar barStyle='dark-content' />
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    app: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c2ffd2',
    },
    content: {
        padding: 16,
        backgroundColor: 'pink',
        borderRadius: 8,
    },
    arrow: {
        borderTopColor: 'pink',
    },
    background: {
        backgroundColor: 'rgba(0, 0, 255, 0.5)'
    },
});


export default App;