import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { combineReducers, createStore } from 'redux';
import todoReducers from './reducers/todo';
import { Provider } from 'react-redux';
const store = createStore(combineReducers<any>({
    number: 1,
    histories: [1]
}));

const App = () => {
    return (
        <Provider store={store}>
            <View>
                <Text>Redux react native</Text>
            </View>
        </Provider>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {}
});
