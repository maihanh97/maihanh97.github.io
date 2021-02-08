import {Item} from 'native-base';
import * as React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {acc} from 'react-native-reanimated';
import {
  IC_CHECKBOX,
  IC_GOBACK2,
  IC_MAIL,
  IC_PASSWORD,
  IC_USER2,
  SIGNUP_SCREEN,
} from '../../assets';
import styles from './SignupScreen.style';

const SignupScreen = ({navigation}: any) => {
  const [checkBox, setCheckBox] = React.useState(false);
  const confirm = () => setCheckBox(!checkBox);
  const [account, setAccount] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const inputData = [
    {
      id: 1,
      placeholder: 'Name',
      icon: IC_USER2,
      func: (value: any) => {
        setAccount({...account, name: value});
      },
      secure: false,
      value: account.name,
    },
    {
      id: 2,
      placeholder: 'Email',
      icon: IC_MAIL,
      func: (value: any) => {
        setAccount({...account, email: value});
      },
      secure: false,
      value: account.email,
    },
    {
      id: 3,
      placeholder: 'Password',
      icon: IC_PASSWORD,
      func: (value: any) => {
        setAccount({...account, password: value});
      },
      secure: true,
      value: account.password,
    },
  ];

  const handleSubmit = () => console.log(account);

  const Header = () => (
    <View>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}>
        <Image source={IC_GOBACK2} style={styles.icBack} />
        <Text style={styles.txtHeader}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Create new account</Text>
    </View>
  );

  const renderItem = (item: any) => (
    <View style={styles.input}>
      <Image source={item.icon} style={styles.icInput} />
      <TextInput
        placeholder={item.placeholder}
        onChangeText={item.func}
        secureTextEntry={item.secure}
        style={styles.txtInput}
        value={item.value}
      />
    </View>
  );

  const SignupContainer = () => (
    <View style={styles.content}>
      <FlatList data={inputData} renderItem={({item}) => renderItem(item)} />

      <View style={styles.confirm}>
        {checkBox ? (
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => confirm()}></TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.checkboxed} onPress={() => confirm()}>
            <Image source={IC_CHECKBOX} style={styles.icCheckbox} />
          </TouchableOpacity>
        )}
        <Text style={styles.agree}>I agree to the </Text>
        <Text style={styles.terms}>Terms & Conditions</Text>
      </View>
      <TouchableOpacity onPress={() => handleSubmit()}>
        <Text style={styles.btnCreate}>Create account</Text>
      </TouchableOpacity>
    </View>
  );

  const Footer = () => (
    <TouchableOpacity
      style={styles.footer}
      onPress={() => navigation.navigate('LoginScreen')}>
      <Text style={styles.txt}>Already a User ? </Text>
      <Text style={styles.txt}>Log in</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <ImageBackground source={SIGNUP_SCREEN} style={styles.image}>
        <Header />
        <SignupContainer />
        <Footer />
      </ImageBackground>
    </View>
  );
};

export default SignupScreen;
