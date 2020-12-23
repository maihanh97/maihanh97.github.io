import React from 'react';
import { Image, Text, View } from 'react-native';
import {historyMedical} from '../../../../../ListData/Properties';
import { FlatList } from 'react-native-gesture-handler';
import styles from './Items.style';
import {GROUP88} from '../../../../../../assets/index';

interface Props {
    datas : historyMedical[]
}

const Item = (props : Props) => {
    return(
        <FlatList
                data ={props.datas}
                renderItem ={ (items)  =>(
                    <View style={styles.container}>
                        <Image
                            source={GROUP88}
                            style={styles.image}
                        />
                        <View style={styles.view}>
                            <View >
                                <Text style={{fontSize: 18}}> {items.item.type} </Text>
                                <Text>BS. {items.item.nameDoctor} </Text>    
                            </View>
                            <Text > {items.item.date} </Text>
                        </View>    
                    </View>
                )}
            />
        
    )
}

export default Item;