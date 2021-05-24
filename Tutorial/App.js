import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import LoginScreen from './Src/Screens/Login/'
import HomeScreen from './Src/Screens/Home/'
import PersonDetails from './Src/Screens/Home/PersonDetails'
import TodoScreen from './Src/Screens/Todo/'
import Dashboard from './Src/Screens/Dashboard/'
import MapsScreen from './Src/Screens/Maps/'
import AboutScreen from './Src/Screens/About'
import TermsScreen from './Src/Screens/Terms'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'


const HomeStack = createStackNavigator()
const Tabbar = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export default class App extends Component {

   constructor(props){
      super(props)

   }

   HomeModule = ({navigation}) => {
    return(
    <HomeStack.Navigator>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{
              title: 'Home',
              headerLeft : () => {
                return(
                <MaterialIcon name = 'menu' size={24} style = {{marginLeft:'10%'}} onPress = { () => 
                  navigation.toggleDrawer()

                }/>
                )
              }
            }} />
            <HomeStack.Screen name="PersonDetails" component={PersonDetails} options={{
              title: 'Details'
            }}/>
     </HomeStack.Navigator> 
     )
  }

    BottomTabs = () => {
      return(
      <Tabbar.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'
              
          } else if (route.name === 'Dashboard') {
            iconName = 'view-dashboard'
          }
          else if (route.name === 'Todo') {
            iconName = 'format-list-numbered'
          }
          else if (route.name === 'Maps') {
            iconName = 'map-marker'
          }

          return <MaterialIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false
        
      })}
    
    >

        <Tabbar.Screen name="Home" component={this.HomeModule} options={{ tabBarBadge: 3 }}/>
          <Tabbar.Screen name="Dashboard" component={Dashboard} />
          <Tabbar.Screen name="Todo" component={TodoScreen} />
          <Tabbar.Screen name="Maps" component={MapsScreen} />
      </Tabbar.Navigator>
      )
    }

    DrawerMenu = () => {
      return(
        <Drawer.Navigator screenOptions={{
          headerShown: false
        }}>

        <Drawer.Screen name="BottomTab" component={this.BottomTabs} options={{
              title: 'Home'
            }}/>
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Terms" component={TermsScreen} />
      </Drawer.Navigator>
      )
    }


  render() {
    return (
      // <LoginScreen />
      <NavigationContainer>
       
        <this.DrawerMenu />

      </NavigationContainer>
    )
  }
}








