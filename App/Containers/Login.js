import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import { connect } from 'react-redux'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LoginScreenStyle'
import images from '../Themes/Images';

class Login extends Component {

  render () {
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={ images.logo } style={styles.logo}/>
        </View>

        <View style={styles.inputContainer}>
          {/* <ImageBackground source={images.nailesImage} style={ styles.inputContainer }>
            
          </ImageBackground> */}
          <TextInput style={ styles.inputBoxes } placeholder="email address"></TextInput>
          <TextInput style={ styles.inputBoxes } placeholder="password"></TextInput>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={ styles.buttonText }>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={ styles.forgotPassContainer}>
          <Text style={styles.forgotText} > Register </Text>
          <Text>&nbsp; &nbsp;</Text>
          <Text style={styles.forgotText} >Forgot Password </Text>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
