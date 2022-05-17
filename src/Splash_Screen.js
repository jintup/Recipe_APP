import * as React from 'react';
import { StyleSheet , View  , Image,  Dimensions,Text,Button , StatusBar, ImageBackground,} from 'react-native';
// import { color, RotateInUpLeft } from 'react-native-reanimated';
import Login from './Screens/Login';
import LinearGradient from 'react-native-linear-gradient';
import {images, COLORS, SIZES, FONTS} from './Theme/theme'


export default function Splash_Screen({navigation}){
    const Hide_Splash_Screen=() =>{
       navigation.reset({index:0,roots:[{name:"Login"}]}); 
       navigation.navigate('Login')
    }
    // setTimeout(() => {

    // },3000);
    function renderHeader() {
      return (
        <View
          style={{
            height: SIZES.height > 700 ? '65%' : '60%',

          }}>
          <ImageBackground
            source={require("./img/Lbg.png")}
  
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
              <Text
                style={{
                  width: '80%',
                  color: COLORS.white,
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
        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.padding,
          }}>
          {/* Description */}
          <Text
            style={{
              marginTop: SIZES.radius,
              width: '70%',
              color: COLORS.gray,
              ...FONTS.body3,
            }}>
            Discover more than 1200 food recipies in you hands and cooking it
            easily!
          </Text>
          </View>
    );
          }
        
        return (
          <View
               style={{
              flex: 1,
              backgroundColor: COLORS.black,
            }}>
             <StatusBar barStyle="light-content" /> 
            {/* Header */}
            {renderHeader()}
            {/* Detail */}
            {renderDetail()}
            
          </View>
        );
      };
      