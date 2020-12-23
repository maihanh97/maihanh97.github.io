import { endOfWeek, isBefore } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, FlatList } from 'react-native';
import LoadItems from './LoadItems/LoadItems';
import { mockData, listData } from '../../../mock/Calendars';
import moment from 'moment';
import styles from './MainSchedule.style'
import ItemsStyle from '../../ProfileDetails/Main/HistoryMedical/History/Item/Items.style';
import { workScheduleModel } from '../../ListData/Properties';

// var curentData = listData.sort((a, b) => {
//     let ta = parseInt(a.time);
//     let tb = parseInt(b.time);
//     return ta - tb;
// })

// let renderData = [];
// //   const currentTime = moment();

// renderData = curentData.reduce(function (r: any, a: any) {
//     r[moment(a.time).format('YYYY-MM-DD')] = r[moment(a.time).format('YYYY-MM-DD')] || [];
//     r[moment(a.time).format('YYYY-MM-DD')].push(a);
//     return r;
// }, []);
// let result: any = [];
// for (let i in renderData) {
//     result.push({ date: i, data: renderData[i] });
// }
// console.log(result);



const MainSchedule = () => {
    const [data, setData] = useState<any>();

    useEffect(() => {
        fetch("https://5fe01c7deca1780017a311db.mockapi.io/Profile")
            .then((response: any) => response.json())
            .then((json: any) => setData(json))
            .catch((error: any) => {
                console.log(error);
                setData([])
            })
    }, [])

    console.log(data);


    // const endWeek = endOfWeek(new Date(moment().format('YYYY-MM-DD')), { weekStartsOn: 1 });
    // const listThisWeek = result.filter((item: any) => isBefore(new Date(moment(item.date).format('YYYY-MM-DD')), endWeek));
    // const listNextWeek = result.filter((item: any) => !isBefore(new Date(moment(item.date).format('YYYY-MM-DD')), endWeek));

    return (
        <View style={styles.container}>
            <ScrollView >
                <Text style={styles.thisWeek}>Tuần này</Text>
                {/* {data.map((item: any) => (
                    <LoadItems date={item.date} infor={item.data} />
                ))} */}
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <LoadItems infor={item} />
                    )}
                />
                {/* <Text style={styles.nextWeek}>Tuần sau</Text>
                {listNextWeek.map((item: any) => (
                    <LoadItems date={item.date} infor={item.data} />
                ))} */}
            </ScrollView>
        </View>
    );
}
export default MainSchedule;

