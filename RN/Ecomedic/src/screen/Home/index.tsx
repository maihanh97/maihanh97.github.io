import React from 'react';
import { Button, View } from 'react-native';
import 'react-native-gesture-handler';

interface Props {
    navigation: any
}

const HomeScreen = ({ navigation }: Props) => {
    const goToProfile = () => navigation.navigate('Profile');
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Button
                title='Profile'
                onPress={goToProfile}
            />
        </View>
    );
}

export default HomeScreen;