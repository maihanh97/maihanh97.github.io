import React, { useRef, useState } from 'react';
import { Button, Text, View, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FA from 'react-native-vector-icons/FontAwesome5'
import styles from './Header.style';


const HeaderSchedule = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Text style={styles.title}>Lịch làm việc</Text>
                <TouchableOpacity style={styles.view}>
                    <FA name='plus' color='white' />
                    <Text style={styles.text}>Tạo mới</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewX}>
                <View style={styles.view2}>
                    <Icon.Button name='menu' color='white' size={20} backgroundColor='#2d9cdb' />
                    <Text style={styles.text2}>Tháng 12</Text>
                </View>

                <View style={styles.view2}>
                    <Text style={styles.text3}>Dạng bảng</Text>
                    <Icon name='toggle' color='white' size={20} />
                </View>
            </View>
        </View>
    );
}


export default HeaderSchedule;