import * as React from 'react';
import { OutlinedTextField } from 'rn-material-ui-textfield';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,SafeAreaView,
  StatusBar,Button,Pressable,StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {images, COLORS, SIZES, FONTS} from '../Theme/theme'
 import {CustomButton} from '../components';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { setGestureState } from 'react-native-reanimated/lib/reanimated2/NativeMethods';
const Login = ({navigation}) => {
  
    const password_field = React.useRef(null);
  
    const[username, setUsername] = React.useState('');
    const[password, setPassword] = React.useState('');
    const[error_1, set_error_1] = React.useState('');
    const[error_2, set_error_2] = React.useState('');
    const[visibility, set_visibility] = React.useState(false);
  
    const verify = () => {
      if (!username || !password) {
          !username ? set_error_1('Please enter a valid username') : null;
          !password ? set_error_2('Please enter a valid password') : null;
      } else { login(); }
    };
    const login =async () => {
      try {
        const res = await fetch('https://fake-authentication1.p.rapidapi.com/api/v1/authentication/login',  {
          method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Host': 'fake-authentication1.p.rapidapi.com',
        'X-RapidAPI-Key': '615ec898e8msh4a75969bdcaf271p1997ddjsn90ab6347b132'
      },
          body: JSON.stringify({
            userName: username, password: password,
          }),
        })
        const response = await res.json();
        console.log(JSON.stringify(response));
        if (response.user) {
          await AsyncStorage.setItem(
            '@credentials',
            JSON.stringify(response),
          );
          navigation.reset({
            index: 0,
            routes: [{ name: 'Navigation'}],
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
          height: SIZES.height > 700 ? '65%' : '60%',
        }}>
        <ImageBackground
          source={require("../assets/images/recipes/Sg.png")}
         
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}
          resizeMode="cover">
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={[COLORS.transparent, COLORS.white]}
            style={{
              height: 200,
              justifyContent: 'flex-end',
              paddingHorizontal: SIZES.padding,
            }}>
            <Text
              style={{
                width: '80%',
                color: COLORS.black,
                ...FONTS.largeTitle,
                lineHeight: 45,
              }}>
              Cooking a Delicius Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }

  function renderDetail() {
   
    return (
    
        
        < View style={{ flex: 2, width: '65%',marginTop:35, alignSelf: 'center' }}>
          <OutlinedTextField
          label="Username"
          baseColor={'black'}
          onFocus={() => set_error_1('')}
          tintColor={'green'}
          textColor={'black'}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          onSubmitEditing={() => password_field.current.focus()}
          value={username}
          onChangeText={text => setUsername(text)}
          error={error_1}
          />
          <OutlinedTextField

          label="Password"
          baseColor={'black'}
          onFocus={() => set_error_2('')}
          tintColor={'green'}
          textColor={'black'}
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
                <Icon name={visibility ? 'visibility' : 'visibility-off'} color={'white'} size={30} />
              </Pressable>
            );
          }}
          />
          <View>
            <Button
               title="Continue"
               onPress={() => verify()} />
             <Pressable style={StyleSheet.blank_button}> 
              </Pressable>   
           
         </View>
       
        <View>
        <Button
           title="SignUp"
           onPress={() => navigation.replace('SignUp')}/>
            </View>
     </View>
      );
    };  
      return (
    <View
      style={{
         flex: 1,
        backgroundColor: COLORS.white,
        blank_button: {
          color:'white',
          marginBottom: 10,
          width:  20,
          alignSelf: 'center',
          height: 20,
          alignItems: 'center',
          justifyContent: 'center',
        },
        blank_button_text: {
          color: 'red',
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

 export default Login;