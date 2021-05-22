import React, { Component } from 'react'
import { Text, View,StyleSheet,SafeAreaView, FlatList, Image } from 'react-native'
import { Avatar, Card } from 'react-native-paper'
import { StyleConstats,FontConstats} from '../../Constants/StyleConstants'

export default class index extends Component {

    constructor(props){
        super(props)

        this.state = {userList:[] , isListRefreshing : false}

        pageIndex = 1
      
    }

    componentDidMount(){
        
        this.GetUsersList()
    }

    renderRowItem = (rowitem) => {
        return(
            <Card style={{margin:'2%'}}>
               
               <View style={{alignItems:'center',margin:'2%'}}>
                   
              <Avatar.Image size={150} source={{uri:rowitem.item.avatar}} /> 
                   
                   <View style={{alignSelf:'center',marginLeft:'5%',alignItems:'center',marginTop:'2%'}}>

                      <Text style = {{fontSize:18}} > {rowitem.item.first_name} </Text>
                      <Text style = {{fontSize:15}} > {rowitem.item.email} </Text>
                     </View>
                 </View>
           

            </Card>
        )
    }
    RowItemseperater = () => {
        return(
            <View style = {{height:1,backgroundColor:'grey' , marginLeft:'5%'}} />
        )
    }

    GetUsersList = () => {
        var usersurl = 'https://reqres.in/api/users?page=' + pageIndex
        fetch(usersurl)
        .then((response) => response.json())
        .then((responseJson) => {
            setTimeout(() => {   
                this.setState({
                userList : this.state.userList.concat(responseJson.data),
                isListRefreshing : false
            }) }, 2000);
           
          })
        
    }
    LoadMoreUsers = () => {
        pageIndex = pageIndex + 1
        this.GetUsersList()
    }
    refreshUsersList = () => {
        pageIndex = 1
        this.setState({
            userList : [],
            isListRefreshing : true
        })
        this.GetUsersList()

    }
    render() {
        return (
            <SafeAreaView style={HomeScreenStyles.parentView}>
            <View style = {HomeScreenStyles.parentView}>
                <FlatList
                    data = {this.state.userList}
                    renderItem = {this.renderRowItem}
                    onEndReached = {this.LoadMoreUsers}
                    onEndReachedThreshold = {0.1}
                    onRefresh = {this.refreshUsersList}
                    refreshing = {this.state.isListRefreshing}
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