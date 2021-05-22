import React, { Component } from 'react'
import { Text, View,StyleSheet,SafeAreaView, FlatList, Image } from 'react-native'
import { Avatar } from 'react-native-paper'
import { StyleConstats,FontConstats} from '../../Constants/StyleConstants'

export default class index extends Component {

    constructor(props){
        super(props)

        this.state = {userList:[]}

      
    }

    componentDidMount(){
        
        this.GetUsersList()
    }

    renderRowItem = (rowitem) => {
        return(
            <View style={{margin:'5%'}}>
               
               <View style={{flexDirection:'row'}}>
                   
              <Avatar.Image size={100} source={{uri:rowitem.item.avatar}} /> 
                   
                   <View style={{alignSelf:'center',marginLeft:'5%'}}>

                      <Text style = {{fontSize:18}} > {rowitem.item.first_name} </Text>
                         <Text style = {{fontSize:15}} > {rowitem.item.email} </Text>
                     </View>
                 </View>
           

            </View>
        )
    }
    RowItemseperater = () => {
        return(
            <View style = {{height:1,backgroundColor:'grey' , marginLeft:'5%'}} />
        )
    }

    GetUsersList = () => {
        fetch('https://reqres.in/api/users')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                userList : responseJson.data
            })
          })
        
    }
    render() {
        return (
            <SafeAreaView style={HomeScreenStyles.parentView}>
            <View style = {HomeScreenStyles.parentView}>
                <FlatList
                    data = {this.state.userList}
                    renderItem = {this.renderRowItem}
                    ItemSeparatorComponent = {this.RowItemseperater}
                    keyExtractor = {item => item.id}
                />
             </View>
            </SafeAreaView>
        )
    }
}

const HomeScreenStyles = StyleSheet.create({
    parentView : {
        flex:1 , 
        backgroundColor: StyleConstats.AppBackgroundColour
    },
    
})