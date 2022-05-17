import * as React from 'react';
import { View, Text, Pressable, ToastAndroid, Image,StatusBar, Alert, Button ,ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { OutlinedTextField } from 'rn-material-ui-textfield';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {images, COLORS, SIZES, FONTS} from '../Theme/theme'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions, StyleSheet } from 'react-native';

const SignUp =({ navigation }) =>{
  const password_field = React.useRef(null);

  const[firstname, setFirstname] = React.useState("");
  const[lastname, setLastname] = React.useState("");
  const[email, setEmail] = React.useState("");
  const[username, setUsername] = React.useState("");
  const[password, setPassword] = React.useState('');
  const[error_1, set_error_1] = React.useState('');
  const[error_2, set_error_2] = React.useState('');
  const[visibility, set_visibility] = React.useState(false);

  const verify = () => {
    if (!username || !password) {
        !username ? set_error_1('Please enter a valid username') : null;
        !password ? set_error_2('Please enter a valid password') : null;
    } else { signup(); }
  };

const signup =async () => {
  try {
    const res = await fetch('https://fake-authentication1.p.rapidapi.com/api/v1/authentication/register',  {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Host': 'fake-authentication1.p.rapidapi.com',
        'X-RapidAPI-Key': '615ec898e8msh4a75969bdcaf271p1997ddjsn90ab6347b132'
      
	},

      body: JSON.stringify({
          fName: firstname,
          lName: lastname,
          email: email,
          userName: username,
          password: password,
      }),
    })
    const response = await res.json();
    console.log(JSON.stringify(response));
    if (response.data === 'Success') {
      await AsyncStorage.setItem(
        '@credentials',
        JSON.stringify(response),
      );
      navigation.reset({
        index: 0,
        routes: [{ name: 'Drawer '}],
    });
    } else {
      ToastAndroid.show('The username or password you entered is incorrect', ToastAndroid.SHORT);
    }
  } catch { (e) => {
    Alert.alert('Oops',e.message ? e.message : 'An unexpected error has occured.Please confirm whether');
  }}
};
 
function renderHeader() {
  return (
    <View
      style={{
        height: SIZES.height > 700 ? '45%' : '60%',
      }}>
      <ImageBackground
        source={require("../img/Lbg.png")}

        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}
        resizeMode="cover">
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={[COLORS.transparent, COLORS.black]}
          style={{
            height: 200,
            justifyContent: 'flex-end',
            paddingHorizontal: SIZES.padding,
          }}>
          
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
function renderDetail() {
  return(
    < View style={{ flex: 2, width: '70%', alignSelf: 'center' }}>
    <OutlinedTextField
      label="firstname"
      baseColor={'white'}
      onFocus={() => set_error_1('')}
      tintColor={'green'}
      textColor={'white'}
      keyboardType={'name'}
      returnKeyType={'next'}
      onSubmitEditing={() => password_field.current.focus()}
      value={firstname}
      onChangeText={text => setFirstname(text)}
      error={error_1}
      />
      <OutlinedTextField
      label="lastname"
      baseColor={'white'}
      onFocus={() => set_error_1('')}
      tintColor={'green'}
      textColor={'white'}
      keyboardType={'name'}
      returnKeyType={'next'}
      onSubmitEditing={() => password_field.current.focus()}
      value={lastname}
      onChangeText={text => setLastname(text)}
      error={error_1}
      />
      <OutlinedTextField
      label="email"
      baseColor={'white'}
      onFocus={() => set_error_1('')}
      tintColor={'green'}
      textColor={'white'}
      keyboardType={'email-address'}
      returnKeyType={'next'}
      onSubmitEditing={() => password_field.current.focus()}
      value={email}
      onChangeText={text => setEmail(text)}
      error={error_1}
      />
      <OutlinedTextField
      label="Username"
      baseColor={'white'}
      onFocus={() => set_error_1('')}
      tintColor={'green'}
      textColor={'white'}
      keyboardType={'email-address'}
      returnKeyType={'next'}
      onSubmitEditing={() => password_field.current.focus()}
      value={username}
      onChangeText={text => setUsername(text)}
      error={error_1}
      />
      <OutlinedTextField
      label="Password"
      baseColor={'white'}
      onFocus={() => set_error_2('')}
      tintColor={'green'}
      textColor={'white'}
      returnKeyType={'next'}
      ref={password_field}
      containerStyle={{ marginTop: 10 }}
      value={password}
      onChangeText={text => setPassword(text)}
      error={error_2}
      onSubmitEditing={verify}
      secureTextEntry={visibility}
      renderRightAccessory={() => {
        return (
          <Pressable onPress={() => set_visibility(!visibility)} style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Icon name={visibility ? 'visibility' : 'visibility-off'} color={'grey'} size={30} />
          </Pressable>
        );
      }}
      />
      <View>
        <Button
           title="Continue"
           onPress={() => navigation.replace('Login')}/>
     </View>
    </View>
 
  );
};  


 return(
<View
      style={{
         flex: 1,
        backgroundColor: COLORS.black,
        blank_button: {
          marginBottom: 10,
          width:  20,
          alignSelf: 'center',
          height: 20,
          alignItems: 'center',
          justifyContent: 'center',
        },
        blank_button_text: {
          color: 'white',
          fontWeight: 'bold',
          fontSize:  25,
        },
          
      }}>

      <StatusBar barStyle="light-content" />
      {/* Header */}
      {renderHeader()}
      {/* Detail */}
      {renderDetail()}
    </View>
  );
};
export default SignUp;