import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingScreen from '../SettingScreen';
import HomeScreen from '../HomeScreen';
import CartScreen from '../CartScreen';
import SignupScreen from '../SignupScreen';
import LoginScreen from '../LoginScreen';
import IntroduceApp from '../../components/IntroduceApp';
import ForgotpassScreen from '../ForgotPasswordScreen';
import ForgotpassStepTwo from '../../components/ForgotpassStepTwo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainScreen() {
  const [isLogin, setIsLogin] = React.useState(false);
  return (
    <NavigationContainer>
      { !isLogin ?
        <Stack.Navigator initialRouteName="IntroduceApp" headerMode="none">
          <Stack.Screen name="IntroduceApp" component={IntroduceApp} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="ForgotpassScreen" component={ForgotpassScreen} />
          <Stack.Screen name="ForgotpassStepTwo" component={ForgotpassStepTwo} />
        </Stack.Navigator> :
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = '';
              if (route.name === 'HomeScreen') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (route.name === "Carts") {
                iconName = focused ? 'cart' : 'cart-outline';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: '' }}
          />
          <Tab.Screen
            name="Carts"
            component={CartScreen}
            options={{ title: '' }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingScreen}
            options={{ title: '' }}
          />

        </Tab.Navigator>}
    </NavigationContainer>
  );
}

export default MainScreen;
