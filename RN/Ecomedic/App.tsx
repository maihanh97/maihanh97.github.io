import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { Button, Text, TextInput, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './src/components/HomeStackScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import WorkScheduleScreen from './src/screen/WorkSchedule';
import PersonalScreen from './src/screen/Personal';
import LoginScreen from './src/screen/Login';
import NoticeScreen from './src/screen/Notice';
const Tab = createBottomTabNavigator();

const A = () => {
    return (
        <View>
            <Text>A</Text>
        </View>
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline'
                        }
                        else if (route.name === 'WorkSchedule') {
                            iconName = focused ? 'calendar' : 'calendar-outline'
                        }
                        else if (route.name === 'Examining') {
                            iconName = focused ? 'receipt' : 'receipt-outline'
                        }
                        else if (route.name === 'Notice') {
                            iconName = focused ? 'notifications' : 'notifications-outline'
                        }
                        else {
                            iconName = focused ? 'person-circle' : 'person-circle-outline'
                        }

                        return <Icon name={iconName} color={color} size={size} />
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#2d9cdb',
                    inactiveTintColor: 'gray',

                }}
            >
                <Tab.Screen
                    name='Home'
                    component={HomeStackScreen}
                    options={{
                        tabBarLabel: 'Trang chủ'
                    }}
                />
                <Tab.Screen
                    name='WorkSchedule'
                    component={WorkScheduleScreen}
                    options={{
                        tabBarLabel: 'Lịch làm việc'
                    }}
                />
                <Tab.Screen
                    name='Examining'
                    component={A}
                    options={{
                        tabBarLabel: 'Phiếu khám'
                    }}
                />
                <Tab.Screen
                    name='Notice'
                    component={NoticeScreen}
                    options={{
                        tabBarLabel: 'Thông báo'
                    }}
                />
                <Tab.Screen
                    name='Personal'
                    component={PersonalScreen}
                    options={{
                        tabBarLabel: 'Cá nhân'
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


export default App;



// import React, { useRef } from "react";
// import { Animated, Text, View, StyleSheet, Button, } from "react-native";

// const App = () => {
//     const fadeAnim = useRef(new Animated.Value(0)).current;
//     const configIn: Animated.TimingAnimationConfig = {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: false,
//     }

//     const configOut: Animated.TimingAnimationConfig = {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: false,
//     }
//     const fadeIn = () => {
//         Animated.timing(fadeAnim, configIn).start();
//     };

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
