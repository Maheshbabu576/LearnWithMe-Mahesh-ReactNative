import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import LoginScreen from './Src/Screens/Login/'
import HomeScreen from './Src/Screens/Home/'
export default class App extends Component {

   constructor(props){
      super(props)

   }


  

  render() {
    return (
      // <LoginScreen />
      <HomeScreen />
    )
  }
}





