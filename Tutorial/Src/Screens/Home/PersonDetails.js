import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class PersonDetails extends Component {

    constructor(props){
        super(props)

        console.log("verify prop values....",this.props.route.params)
    }

    render() {
        return (
            <View>
                <Text> This is person details details screen </Text>
            </View>
        )
    }
}
