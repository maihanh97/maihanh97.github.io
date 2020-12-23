import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';

const NoticeScreen = () => {
    const [datas, setDatas] = useState<any>();
    const [api, setApi] = useState<any>();
    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => setDatas(json.movies))
            .catch((error) => console.error(error))
    }, []);

    useEffect(() => {
        fetch('https://www.getpostman.com/collections/fd4da353ee4ff4aec4fc')
            .then((response) => response.json())
            .then((json) => setApi(json.item))
            .catch((error) => console.log(error))
    }, []);

    return (
        <View>
            <FlatList
                data={datas}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <Text>{item.title} ==== {item.releaseYear}</Text>
                )}
            />

            <FlatList
                data={api}
                renderItem={({ item }) => (
                    <View style={{ borderWidth: 1, borderColor: 'pink', padding: 5, marginTop: 5 }}>
                        <Text> {item.name} </Text>
                        <Text> {item._postman_id} </Text>
                    </View>
                )}
            />
        </View>
    )
}

export default NoticeScreen;