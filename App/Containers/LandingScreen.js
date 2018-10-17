import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/LandingScreenStyle'

class LandingScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>LandingScreen Container</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen)
