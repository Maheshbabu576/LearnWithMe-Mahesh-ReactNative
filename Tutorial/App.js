import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { DrawerMenu } from './Src/Routing';
import Authentication from './Src/Helpers/Authentication';


export default class App extends Component {

   constructor(props){
      super(props)

   }

  render() {
    return (
      
      <NavigationContainer>
       
        <Authentication />

      </NavigationContainer>
    )
  }
}












