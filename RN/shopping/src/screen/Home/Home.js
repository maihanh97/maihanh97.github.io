import React from 'react';
import { FlatList,View} from 'react-native';
import Products from '../../components/Product/Products';
import {ListData} from '../../components/ListData/ListData';
import 'react-native-gesture-handler';

const Home = ({navigation}) =>{
    return ( 
        <View>
            <FlatList
                data = {ListData}
                renderItem ={({item}) =>
                    <Products
                        link = {item.link}
                        title = {item.title}
                        add = {item.add}
                        distance = {item.distance}
                        deal = {item.deal}
                        onPress={() => {
                            navigation.navigate('Details',{
                                index: item.id
                            });
                        }}
                    />
                }
            />    
        </View>
    );
}

export default Home;