import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  FlatList,
  Image,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import axios from 'axios';

const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    axios
      .get(`https://5f43ceaf75bded001695e51b.mockapi.io/pagination`)
      .then((response) => {
        setData(response.data);
        setTotalPage(response.data.length);
        console.log(data);
        console.log(totalPage);
      })
      .catch((err) => console.log(err));
  }, []);

  const [data, setData] = useState<any>([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const onPressPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const _onPressNext = () => {
    setCurrentPage(currentPage + 1);
  };

  function HomeScreen() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <FlatList
          data={data.filter(
            (item: any) =>
              item.id <= perPage * currentPage &&
              item.id > perPage * (currentPage - 1),
          )}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text>
                {item.id} - {item.name}
              </Text>
              <Image source={{uri: item.avatar}} />
            </View>
          )}
        />

        <View style={styles.btn}>
          <Button
            title="Previous"
            disabled={currentPage === 1 ? true : false}
            onPress={() => onPressPrevious()}
          />
          <Button
            disabled={
              currentPage >= Math.ceil(totalPage / perPage) ? true : false
            }
            title="Next"
            onPress={() => _onPressNext()}
          />
        </View>
      </View>
    );
  }

  function SettingsScreen() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    borderColor: 'black',
    margin: 5,
    borderWidth: 1,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;
