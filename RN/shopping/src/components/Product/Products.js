import React from 'react';
import {View,Image,Text,TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import styles from './Products.style'


const Products  = ({onPress,link, title, add, distance,deal}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image
                style={styles.imgContainer}
                source={{uri : link}}
            />
            <View style={styles.content}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>{title}</Text>
                <Text >{add}</Text>
                <Text style={styles.distance}>{distance}</Text>
                <Text style={styles.deal}>{deal}</Text>
            </View>
        </TouchableOpacity>    
    );
}
export default Products;
