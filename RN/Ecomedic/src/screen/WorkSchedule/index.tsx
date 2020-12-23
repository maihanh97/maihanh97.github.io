import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import HeaderSchdule from '../../components/WorkScheduleDetails/Header';
import MainSchedule from '../../components/WorkScheduleDetails/Main';

const WorkScheduleScreen = () => {
    return (
        <View>
            <StatusBar barStyle='dark-content' />
            <HeaderSchdule />
            <MainSchedule />
        </View>
    );
}

export default WorkScheduleScreen;
