import * as React from 'react';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import EggRecipes from '../Screens/EggRecipes';
import MilkRecipes from '../Screens/MilkRecipes';
import FishRecipes from '../Screens/FishRecipes';
import TomatoRecipes from '../Screens/TomatoRecipes';
import WheatRecipes from '../Screens/WheatRecipes';
import RiceRecipes from '../Screens/RiceRecipes';
import DessertRecipes from '../Screens/DessertRecipes';
import StarterRecipes from '../Screens/StarterRecipes';
import SoupRecipes from '../Screens/SoupRecipes';
import SouthIndianRecipes from '../Screens/SouthIndianRecipes';
import SaladsRecipes from '../Screens/SaladsRecipes';
import ChikenRecipes from '../Screens/ChickenRecipes';
import Item from '../Screens/Item';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';



const Drawer = createDrawerNavigator();

export default function MyDrawer(){
  return (  
      <Drawer.Navigator
      screenOptions={{headerShown:true,
                      drawerActiveBackgroundColor:color.accent_green,drawerInactiveBackgroundColor:'#f5f5f5',drawerInactiveTintColor:'white',drawerInactiveTintColor:'black',swipeEdgeWidth:1}} >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Item" component={Item}/>
      <Drawer.Screen name="SouthIndianRecipes" component={SouthIndianRecipes} />
        <Drawer.Screen name="EggRecipes" component={EggRecipes} />
        <Drawer.Screen name="MilkRecipes" component={MilkRecipes} />
        <Drawer.Screen name="FishRecipes" component={FishRecipes} />
        <Drawer.Screen name="TomatoRecipes" component={TomatoRecipes} />
        <Drawer.Screen name="WheatRecipes" component={WheatRecipes} />
        <Drawer.Screen name="RiceRecipes" component={RiceRecipes} />
        <Drawer.Screen name="DessertRecipes" component={DessertRecipes} />
        <Drawer.Screen name="StarterRecipes" component={StarterRecipes} />
        <Drawer.Screen name="SoupRecipes" component={SoupRecipes} />
    
        <Drawer.Screen name="SaladsRecipes" component={SaladsRecipes} />
        <Drawer.Screen name="ChickenRecipes" component={ChikenRecipes} />

      <Drawer.Screen name="Logout" component={Login}/>
      </Drawer.Navigator>
  );
}