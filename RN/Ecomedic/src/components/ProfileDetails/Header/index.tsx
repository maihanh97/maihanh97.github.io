import { NavigationRouteContext } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BACK, CLOSE } from '../../../assets';
import styles from './Header.style';


export const headerLeft = ({ navigation }: any) => {
    const handleBack = () => navigation.navigate('Home');
    <TouchableOpacity style={styles.viewContainer} onPress={handleBack}>
        <Image
            source={BACK}
            style={styles.back}
        />
        <Text style={styles.text}>Trở về</Text>
    </TouchableOpacity>
}

export const headerRight = ({ navigation }: any) => {
    const handleBack = () => navigation.navigate('Home');
    <TouchableOpacity onPress={handleBack} >
        <Image
            source={CLOSE}

        />
    </TouchableOpacity>
}
