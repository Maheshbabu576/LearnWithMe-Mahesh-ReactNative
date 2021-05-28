import React from 'react'
import LoginScreen from '../Screens/Login/'
import HomeScreen from '../Screens/Home/'
import PersonDetails from '../Screens/Home/PersonDetails'
import TodoScreen from '../Screens/Todo/'
import Dashboard from '../Screens/Dashboard/'
import MapsScreen from '../Screens/Maps/'
import AboutScreen from '../Screens/About'
import TermsScreen from '../Screens/Terms'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'


const HomeStack = createStackNavigator()
const LoginStack = createStackNavigator()
const Tabbar = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export const HomeModule = ({navigation}) => {
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

  export const LoginModule = ({navigation}) => {
    return(
    <LoginStack.Navigator>
            <LoginStack.Screen name="LoginScreen" component={LoginScreen} options={{
              headerShown:false
            }}/>
     </LoginStack.Navigator> 
     )
  }

  export const DrawerMenu = () => {
    return(
      <Drawer.Navigator screenOptions={{
        headerShown: false
      }}>
  
      <Drawer.Screen name="BottomTab" component={BottomTabs} options={{
            title: 'Home'
          }}/>
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Terms" component={TermsScreen} />
    </Drawer.Navigator>
    )
  }

export const BottomTabs = () => {
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

      <Tabbar.Screen name="Home" component={HomeModule} options={{ tabBarBadge: 3 }}/>
        <Tabbar.Screen name="Dashboard" component={Dashboard} />
        <Tabbar.Screen name="Todo" component={TodoScreen} />
        <Tabbar.Screen name="Maps" component={MapsScreen} />
    </Tabbar.Navigator>
    )
  }