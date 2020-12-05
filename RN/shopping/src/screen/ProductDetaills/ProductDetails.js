import React from 'react';
import 'react-native-gesture-handler';
import { View, Text ,Image} from 'react-native';
import {ListData} from '../../components/ListData/ListData';
import styles from './ProductDetails.style';

function ProductDetails({ route }) {
    const {index} = route.params;
    const itemDetail = ListData.find( item => item.id===index);
    return (
        <View>
            <Image
                style={styles.image}
                source={{uri : itemDetail.link}}
            />
            <View style={styles.content}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>{itemDetail.title}</Text>
                <Text >{itemDetail.add}</Text>
                <Text style={styles.deal}>{itemDetail.deal}</Text>
            </View>
        </View>
    );
}

export default ProductDetails;