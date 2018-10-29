import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import { connect } from 'react-redux'

import { Images } from '../Themes'

// Styles
import styles from './Styles/RegisterScreenStyle'
import images from '../Themes/Images';

class Login extends Component {

  register () {
    this.props.navigation.navigate("HomeScreen")
  }

  render () {
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={ images.logo } style={styles.logo}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={ styles.inputBoxes } placeholder="Name"></TextInput>
          <TextInput style={ styles.inputBoxes } placeholder="Surname"></TextInput>
          <TextInput style={ styles.inputBoxes } placeholder="email address"></TextInput>
          <TextInput style={ styles.inputBoxes } placeholder="password"></TextInput>

          <TouchableOpacity onPress={this.register.bind(this)} style={styles.buttonContainer}>
            <Text style={ styles.buttonText }>REGISTER</Text>
          </TouchableOpacity>
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
