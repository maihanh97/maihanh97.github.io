import * as React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { IC_FORGOTPASS, IC_GOBACK, IC_USER, IC_VERIFICATION } from '../../assets';
import styles from './ForgotpassStepTwo.style';
const ForgotpassStepTwo = ({ navigation }: any) => {
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
            <Image source={IC_VERIFICATION} style={styles.imgPass} />
          </View>
        </View>

        <Text style={styles.txt}>Please enter your registered phonenumber.</Text>
        <Text style={styles.desc}>We will send a verification code to your registered phonenumber.</Text>


        <TouchableOpacity style={styles.btnNext} onPress={() => navigation.navigate("ForgotpassStepTwo")}>
          <Text style={styles.txtBtn}>Done</Text>
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

export default ForgotpassStepTwo;
