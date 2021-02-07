import * as React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { IC_FORGOTPASS, IC_GOBACK, IC_USER } from '../../assets';
import styles from './ForgotpassScreen.style';

const ForgotpassScreen = ({ navigation }: any) => {
  const Header = () => {
    return (
      <View style={styles.header}>
        <Image source={IC_GOBACK} style={styles.icBack} />
        <Text style={styles.txtHeader}>Forgot Password</Text>
      </View>
    )
  }

  const Content = () => {
    return (
      <View style={styles.content}>
        <View style={styles.imgContainer}>
          <View style={styles.bgImg}>
            <Image source={IC_FORGOTPASS} style={styles.imgPass} />
          </View>
        </View>

        <Text style={styles.txt}>Please enter your registered phonenumber.</Text>
        <Text style={styles.desc}>We will send a verification code to your registered phonenumber.</Text>

        <View style={styles.input}>
          <Image source={IC_USER} style={styles.imgUser} />
          <TextInput placeholder="Your phonenumber" style={styles.txtInput} keyboardType="number-pad" />
        </View>

        <TouchableOpacity style={styles.btnNext} onPress={() => navigation.navigate("ForgotpassStepTwo")}>
          <Text style={styles.txtBtn}>Next</Text>
        </TouchableOpacity>
      </View>
    )

  }
  return (
    <View style={styles.container} >
      <Header />
      <Content />
    </View>
  );
};

export default ForgotpassScreen;
