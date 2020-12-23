import React from 'react';
import { Image, Text, View } from 'react-native';
const Title = () =>{
    return(
        <View style={{flexDirection: "row"}}>
            <Image
                source={require('../../../../../assets/image/clock.png')}
                style={{marginRight :10,
                marginLeft: 12}}
            />
            <Text>LỊCH SỬ KHÁM</Text>    
        </View>
    )
}

export default Title;