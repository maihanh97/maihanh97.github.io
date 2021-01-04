// import { NavigationContainer } from '@react-navigation/native';
// import React, { useState, useEffect } from 'react';
// import 'react-native-gesture-handler';
// import { Button, Text, TextInput, View } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeStackScreen from './src/components/HomeStackScreen';
// import Icon from 'react-native-vector-icons/Ionicons';
// import WorkScheduleScreen from './src/screen/WorkSchedule';
// import PersonalScreen from './src/screen/Personal';
// import LoginScreen from './src/screen/Login';
// import NoticeScreen from './src/screen/Notice';
// const Tab = createBottomTabNavigator();

// const A = () => {
//     return (
//         <View>
//             <Text>A</Text>
//         </View>
//     )
// }

// const App = () => {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//                 screenOptions={({ route }) => ({
//                     tabBarIcon: ({ focused, color, size }) => {
//                         let iconName;

//                         if (route.name === 'Home') {
//                             iconName = focused ? 'home' : 'home-outline'
//                         }
//                         else if (route.name === 'WorkSchedule') {
//                             iconName = focused ? 'calendar' : 'calendar-outline'
//                         }
//                         else if (route.name === 'Examining') {
//                             iconName = focused ? 'receipt' : 'receipt-outline'
//                         }
//                         else if (route.name === 'Notice') {
//                             iconName = focused ? 'notifications' : 'notifications-outline'
//                         }
//                         else {
//                             iconName = focused ? 'person-circle' : 'person-circle-outline'
//                         }

//                         return <Icon name={iconName} color={color} size={size} />
//                     },
//                 })}
//                 tabBarOptions={{
//                     activeTintColor: '#2d9cdb',
//                     inactiveTintColor: 'gray',

//                 }}
//             >
//                 <Tab.Screen
//                     name='Home'
//                     component={HomeStackScreen}
//                     options={{
//                         tabBarLabel: 'Trang chủ'
//                     }}
//                 />
//                 <Tab.Screen
//                     name='WorkSchedule'
//                     component={WorkScheduleScreen}
//                     options={{
//                         tabBarLabel: 'Lịch làm việc'
//                     }}
//                 />
//                 <Tab.Screen
//                     name='Examining'
//                     component={A}
//                     options={{
//                         tabBarLabel: 'Phiếu khám'
//                     }}
//                 />
//                 <Tab.Screen
//                     name='Notice'
//                     component={NoticeScreen}
//                     options={{
//                         tabBarLabel: 'Thông báo'
//                     }}
//                 />
//                 <Tab.Screen
//                     name='Personal'
//                     component={PersonalScreen}
//                     options={{
//                         tabBarLabel: 'Cá nhân'
//                     }}
//                 />
//             </Tab.Navigator>
//         </NavigationContainer>
//     )
// }


// export default App;



// import React, { useRef } from "react";
// import { Animated, Text, View, StyleSheet, Button, } from "react-native";

// const App = () => {
// const fadeAnim = useRef(new Animated.Value(0)).current;
// const configIn: Animated.TimingAnimationConfig = {
//     toValue: 1,
//     duration: 1000,
//     useNativeDriver: false,
// }

// const configOut: Animated.TimingAnimationConfig = {
//     toValue: 1,
//     duration: 1000,
//     useNativeDriver: false,
// }
// const fadeIn = () => {
//     Animated.timing(fadeAnim, configIn).start();
// };

//     const fadeOut = () => {
//         Animated.timing(fadeAnim, configOut).start();
//     };

//     return (
//         <View style={styles.container}>
//             <Animated.View
//                 style={[
//                     styles.fadingContainer,
//                     {
//                         opacity: fadeAnim
//                     }
//                 ]}
//             >
//                 <Text style={styles.fadingText}>Fading View!</Text>
//             </Animated.View>
//             <View style={styles.buttonRow}>
//                 <Button title="Fade In" onPress={fadeIn} />
//                 <Button title="Fade Out" onPress={fadeOut} />
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     fadingContainer: {
//         paddingVertical: 8,
//         paddingHorizontal: 16,
//         backgroundColor: "powderblue"
//     },
//     fadingText: {
//         fontSize: 28,
//         textAlign: "center",
//         margin: 10
//     },
//     buttonRow: {
//         flexDirection: "row",
//         marginVertical: 16
//     }
// });

// export default App;

import React, { useState, useRef } from 'react';
import 'react-native-gesture-handler';
import { View, Text, Button, StatusBar, TextInput, StyleSheet, Animated, Alert, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { Popover, PopoverController } from 'react-native-modal-popover'
// import Modal from 'react-native-modal';

// const ModalTester = () => {
//     const [isModalVisible, setModalVisible] = useState(false);

//     const toggleModal = () => {
//         setModalVisible(!isModalVisible);
//     };

//     return (
//         <View style={{ flex: 1 }}>
//             <Button title="Show modal" onPress={toggleModal} />

//             <Modal isVisible={isModalVisible}>
//                 <View style={{ flex: 1 }}>
//                     <Text>Hello!</Text>

//                     <Button title="Hide modal" onPress={toggleModal} />
//                 </View>
//             </Modal>
//         </View>
//     );
// }

const BottomPopup = () => {
    const [show, setShow] = useState<boolean>(false);
    const showw = () => setShow(true);
    const close = () => setShow(false);
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={show}
            onRequestClose={close}
        />
    )
}

const App = () => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const HomeScreen = ({ navigation }: any) => {
        return (
            <Button
                title='Sign up for Ecomedic'
                onPress={() => navigation.navigate('SignUp')}
            />

        )
    }

    const SignUp = ({ navigation }: any) => {
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
            // Alert.alert('Email không được để trống.')
            return false;
        }
        if (pass === '') {
            // Alert.alert('pass không được để trống.');
            return false;
        }
        if (pass.length < 8) {
            // Alert.alert('pass có độ dài ít nhất 8 kí tự.')
            return false;
            ;
        }
        if (!_checkEmail(email)) {
            // Alert.alert('Email không đúng.');
            return false;
        }
        return true;
    }

    // const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const configIn: Animated.TimingAnimationConfig = {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
    }
    const fadeIn = () => {
        Animated.timing(fadeAnim, configIn).start();
    };

    const PopOver = () => (
        <View>
            {/* <Animated.View
                style={{
                    opacity: fadeAnim // Bind opacity to animated value
                }}
            >
                <PopoverController>
                    {({ openPopover, closePopover, popoverVisible, setPopoverAnchor, popoverAnchorRect }) => (
                        <React.Fragment>
                            <Button title="Press me!" ref={setPopoverAnchor} onPress={openPopover} />
                            
                            <Popover
                                contentStyle={styles.content}
                                arrowStyle={styles.arrow}
                                // backgroundStyle={styles.background}
                                visible={popoverVisible}
                                onClose={closePopover}
                                fromRect={popoverAnchorRect}
                                supportedOrientations={['portrait', 'landscape']}
                            >
                                <Text>Hello from inside popover!</Text>
                            </Popover>
                        </React.Fragment>
                    )}
                </PopoverController>
            </Animated.View>
            <Button title='A' onPress={fadeIn} /> */}
            {/* <ModalTester /> */}

            <BottomPopup />
        </View>
    );

    return (
        <NavigationContainer>
            <StatusBar barStyle='dark-content' />
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Popupover" component={PopOver} />
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