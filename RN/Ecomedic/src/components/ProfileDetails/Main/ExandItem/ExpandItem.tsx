import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './ExpandItem.style';
import { CLOCK, GROUP16 } from '../../../../assets/index';
const ExpandItem = () => {
    const onPressItem = () => {
        setIsShow(!isShow)
    }
    const [isShow, setIsShow] = useState(false);

    const Item = () => {
        if (isShow) {
            return (
                <View style={styles.containerItem}>
                    <TouchableOpacity
                        style={styles.container}
                        onPress={onPressItem}
                    >
                        <Text style={styles.text}>Thu gọn</Text>
                        <Image
                            source={GROUP16}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                </View>
            )
        }
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={onPressItem}
            >
                <Text style={styles.text}>Mở rộng</Text>
                <Image
                    source={GROUP16}
                />
            </TouchableOpacity>
        )
    }
    return (
        <Item />
    )
}

export default ExpandItem;