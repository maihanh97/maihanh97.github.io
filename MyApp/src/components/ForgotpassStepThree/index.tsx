import * as React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {IC_EYE, IC_EYE_SHOW, IC_GOBACK2} from '../../assets';
import styles from './ForgotpassStepThree.style';

const ForgotpassStepThree = ({navigation}: any) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassConfirm, setShowPassConfirm] = React.useState(false);
  const [pass, setPass] = React.useState({
    newPass: '',
    passConfirm: '',
  });

  const [validatePass, setValidatePass] = React.useState({
    passValidate: true,
    passConfirmValidate: true,
  });

  const changePass = (value: any) => setPass({...pass, newPass: value});

  const changePassConfirm = (value: any) =>
    setPass({...pass, passConfirm: value});

  const handleSubmit = () => {};

  const Header = () => {
    return (
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}>
        <Image source={IC_GOBACK2} style={styles.icBack} />
        <Text style={styles.txtHeader}>Back</Text>
      </TouchableOpacity>
    );
  };

  const Content = () => {
    return (
      <View style={styles.content}>
        <Text>Create new password</Text>
        <Text>
          Your new password must different from previous used password
        </Text>
        <Text>Password</Text>
        <View style={styles.inputPass}>
          <TextInput
            placeholder="Enter your new password"
            value={pass.newPass}
            style={styles.input}
            onChangeText={(value) => changePass(value)}
          />
          {showPassword ? (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image source={IC_EYE} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image source={IC_EYE_SHOW} />
            </TouchableOpacity>
          )}
        </View>
        {validatePass.passValidate ? null : (
          <Text>Must be at least 8 charactors.</Text>
        )}

        <Text>Confirm Password</Text>
        <View style={styles.inputPass}>
          <TextInput
            placeholder="Confirm your new password"
            style={styles.input}
            value={pass.passConfirm}
            onChangeText={(value) => changePassConfirm(value)}
          />
          {showPassConfirm ? (
            <TouchableOpacity
              onPress={() => setShowPassConfirm(!showPassConfirm)}>
              <Image source={IC_EYE} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setShowPassConfirm(!showPassConfirm)}>
              <Image source={IC_EYE_SHOW} />
            </TouchableOpacity>
          )}
        </View>
        {validatePass.passConfirmValidate ? null : (
          <Text>Both password must match.</Text>
        )}
      </View>
    );
  };

  return (
    <View>
      <Header />
      <Content />
    </View>
  );
};

export default ForgotpassStepThree;
