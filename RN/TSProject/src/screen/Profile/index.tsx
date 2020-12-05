import React, {FC,useState} from 'react';
import { Button, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MainProfile from '../../components/ProfileDetails/Main/MainProfile';
import styles from './Profile.style'

const Profile = () =>{
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content'/>
            <ScrollView style={{width:'100%'}}>
                <MainProfile/>    
            </ScrollView>
        </View>
    )
}

export default Profile;