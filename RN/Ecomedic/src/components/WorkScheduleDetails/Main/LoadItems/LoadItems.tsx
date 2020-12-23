import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { CLOCK } from '../../../../assets';
import styles from './LoadItems.style';
import moment from 'moment'
interface Props {
    // date: string,
    infor: any
}

const LoadItems = (props: Props) => {
    const { infor } = props;
    return (
        <View style={styles.wrapper}>
            <View style={styles.left}>
                <Text style={styles.textLeft}>{moment(infor.timeStamp).format('DD-MM-YYYY').split('-')[0]}</Text>
                <Text>Tháng {moment(infor.timeStamp).format('DD-MM-YYYY').split('-')[1]} </Text>
            </View>

            <View style={styles.container}>
                <FlatList
                    data={infor}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <View style={styles.type}>
                                <Text> {item.carePackage} </Text>
                                <View style={styles.timeContainer}>
                                    <Text style={styles.times}> {moment(item.timeStamp).format('HH:mm')} </Text>
                                    <Image source={CLOCK} />
                                </View>
                            </View>
                            <View style={styles.info}>
                                <View>
                                    <Text style={styles.name}> {item.name} </Text>
                                    <Text> {`${item.age}`} tuổi - {item.gender} </Text>
                                </View>
                                <Image style={styles.infoImage} source={{ uri: "https://th.bing.com/th/id/OIP.JrJmLGFaRxTU2IFJNkm05AHaJ4?pid=Api&rs=1" }} />
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

export default LoadItems;
