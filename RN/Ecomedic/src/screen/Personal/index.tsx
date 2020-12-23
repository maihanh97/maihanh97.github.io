import React, { useState } from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Value } from 'react-native-reanimated';
import { LOGIN } from '../../assets';
import styles from './Personal.style';
const PersonalScreen = () => {
    return (
        <ScrollView>
            <Image source={LOGIN} style={{ opacity: 0.9 }} />
            <View style={styles.container}>
                <View>
                    <Text style={styles.hello}>Chào bác sĩ</Text>
                    <Text style={styles.title}>Đây là ứng dụng quản lý công việc dành riêng cho bác sĩ trong thời đại 4.0</Text>
                </View>
                <View style={styles.phone}>
                    <Text style={styles.text}>Nhập số điện thoại</Text>
                    <TextInput
                        placeholder='0961607140'
                        style={styles.textInput}
                        maxLength={10}
                    />
                    <Button
                        title='Gửi mã đăng nhập'
                        onPress={() => null}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default PersonalScreen;