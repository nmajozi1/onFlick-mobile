import React, { Component } from 'react'
import { TextInput, View, TouchableOpacity, Text } from 'react-native'


import styles from './Styles/LoginFormStyle'

export default class LaunchScreen extends Component {

  render () {
    return (
        <View style={styles.mainContainer}>
            <TextInput style={styles.input} placeholder="Username or email"/>
            <TextInput style={styles.input} placeholder="Password"/>

            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>CHARITY LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
  }
}