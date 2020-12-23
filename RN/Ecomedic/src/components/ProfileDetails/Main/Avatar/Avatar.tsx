import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './Avatar.style';
import {profileModel} from '../../../ListData/Properties';

interface Props {
    datas: profileModel
}

const Avatar =(props:Props) => {
    const {datas} = props;
    return (
        <View style={styles.container}>
            <Image
                source={{uri: datas.link}}
                style={styles.image}
            />
            <Text style ={styles.name}>{datas.name}</Text>
            <Text style={styles.age}>{datas.age} tuổi - {datas.gender}- {datas.phone}</Text>    
        </View>
    );
}

export default Avatar;