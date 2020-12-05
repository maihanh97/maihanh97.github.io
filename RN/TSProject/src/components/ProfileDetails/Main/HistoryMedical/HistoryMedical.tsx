import React from 'react';
import { View } from 'react-native';
import History from './History';
import styles from './HistoryMedical.style'
import Title from './Title';

const data =[
    {
        id: 1,
        type: 'Khám dịch vụ',
        nameDoctor: 'Hà Ngọc Cường',
        date : '15/10/2020'
    },
    {
        id: 2,
        type: 'Khám định kỳ',
        nameDoctor: 'Trần Văn An',
        date : '23/12/2020'
    }
]

const Shape =() =>{
    return (
        <View style={styles.container}>
            <Title/>
            <History datas={data}/>  
        </View>
    );
}

export default Shape;