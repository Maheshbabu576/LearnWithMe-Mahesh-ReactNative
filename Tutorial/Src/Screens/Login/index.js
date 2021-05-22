import React, { Component } from 'react'
import { SafeAreaView, Text, View,Image, TextInput , StyleSheet } from 'react-native'
import { TextInput as MaterialTextInput ,  Button , HelperText ,  TouchableOpacity} from 'react-native-paper';
import {loginStyles} from './Styles'
import { StyleConstats,FontConstats} from '../../Constants/StyleConstants'

export default class index extends Component {


    constructor(props){
        super(props)

        this.state = {emailError : false ,passwordError : false , emailValue : '', passwordValue : '' , isPasswordSecure : true}
    }

    loginButtonPressed = () => {


        if(this.state.emailValue == '') {

            this.setState({
                emailError : true
            })
        }
        else {
            this.setState({
                emailError : false
            })
        }

        if(this.state.passwordValue == '') {

            this.setState({
                passwordError : true
            })
        }
        else {
            this.setState({
                passwordError : false
            })
        }
            
    }

    EmailValuechanged = (text) => {
        this.setState({
            emailValue : text
        })

        this.validateEmail(text)

    }

    PasswordValuechanged = (text) => {
        this.setState({
            passwordValue : text
        })

        this.validatePassword(text)

    }

    validateEmail = (email) =>{
        
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) === false) {
                   
            this.setState({
                emailError : true
            })
                   
          }
         else {
            this.setState({
                emailError : false
            })
         }
    }


    validatePassword = (password) =>{
        
        let reg = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
        if (reg.test(password) === false) {
                   
            this.setState({

                passwordError : true
            })
          }
         else {
            this.setState({

                passwordError : false
            })
         }
    }

    showPassword = () => {

        this.setState({
            isPasswordSecure : !this.state.isPasswordSecure
        })
       
    }
   

    render() {
        return (
            <SafeAreaView style={loginStyles.parentView}>
            <View style = {loginStyles.parentView}>
                <View style={{justifyContent:'center' , alignItems:'center', marginTop:'5%'}}>
                    <Image source={require('../../Images/appleLogo.png')} />
                    <Text style={{fontSize:24 , marginTop:'5%' , color:StyleConstats.PrimaryTextColour, fontFamily:FontConstats.defaultFont}}> My First Application </Text>
                </View>
                <View style={{margin:'5%'}}>
                     <MaterialTextInput style={loginStyles.EmailTextFiled} placeholder={"Email"} mode='outlined' label={"Email"} error={this.state.emailError} value = {this.state.emailValue} onChangeText={this.EmailValuechanged}/>
                 <HelperText type="error" visible={this.state.emailError}>
                          Email address is invalid!
                     </HelperText>
                    <MaterialTextInput style={loginStyles.PasswordTextFfiled} placeholder={"Password"} secureTextEntry={this.state.isPasswordSecure} mode='outlined' 
                    label={"Password"} value = {this.state.passwordValue} onChangeText = {this.PasswordValuechanged} error={this.state.passwordError}
                    right={<MaterialTextInput.Icon name={this.state.isPasswordSecure?"eye":"eye-off"} onPress={ this.showPassword}/>}
                    />

                    <HelperText type="error" visible={this.state.passwordError}>
                          Password not meet the required format!
                     </HelperText>
                    <Button mode="contained"  style={{margin:'5%', height:'15%', justifyContent:'center',backgroundColor:StyleConstats.ButtonBackgroundColour}}  onPress={this.loginButtonPressed}>
                        Login
                    </Button>
                </View>
            </View>
            </SafeAreaView>
        )
    }
}


