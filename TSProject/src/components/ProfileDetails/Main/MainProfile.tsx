import React from 'react';
import { View } from 'react-native';
import Avatar from './Avatar/Avatar';
import Shape from './Shape/Shape';
import HistoryMedical from './HistoryMedical/HistoryMedical'
import ExpandItem from './ExandItem/ExpandItem';
import styles from './MainProfile.style';
import Buttons from './Button/Buttons';
import {data} from './../../ListData/Data'

const MainProfile =( ) =>{
    return (
        <View style= {styles.container}>
            <Avatar datas={data}/>

            <Shape datas={data} />

            <HistoryMedical/>

            <ExpandItem/>

            <Buttons/>
        </View>
    );
}

export default MainProfile;