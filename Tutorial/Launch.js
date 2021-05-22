import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Launch extends Component {
    render() {
        return (
            <View style = {{justifyContent:'center',alignItems:'center'}}>
                <Text> This is launch Screen </Text>
                <Launch1 />
            </View>
        )
    }
}

export class Launch1 extends Component {
    render() {
        return (
            <View style = {{justifyContent:'center',alignItems:'center'}}>
                <Text> This is launch Screen - Duplicate </Text>
            </View>
        )
    }
}
