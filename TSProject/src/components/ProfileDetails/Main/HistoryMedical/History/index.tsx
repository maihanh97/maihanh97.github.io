import React from 'react';
import { View } from 'react-native';
import {historyMedical} from '../../../../ListData/Properties';
import Item from './Item';

interface Props {
    datas:historyMedical[]
}

const History = (props : Props) =>{
    return(
        <View >
            <Item datas={props.datas}/>
        </View> 
    )
}

export default History;