import React from 'react';
import {View,Button} from 'react-native';
import styles from './Buttons.style'
const Buttons = () =>{
    return(
        <View style={styles.container}>
            <Button
                title="Đặt lịch khám"
                onPress={()=> null}
            />
            <Button
                title="Tạo phiếu khám"
                onPress={()=> null}
            />
        </View> 
    )
}

export default Buttons;