import React from 'react';
import { StatusBar, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MainProfile from '../../components/ProfileDetails/Main/MainProfile';
import styles from './Profile.style'

const Profile = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <ScrollView style={styles.scrollView}>
                <MainProfile />
            </ScrollView>
        </View>
    )
}

export default Profile;