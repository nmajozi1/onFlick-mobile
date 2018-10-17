import { StackNavigator } from 'react-navigation'
import LandingScreen from '../Containers/LandingScreen'
import Login from '../Containers/Login'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginPage from '../Containers/Login'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LandingScreen: { screen: LandingScreen },
  Login: { screen: Login },
  LoginPage: { screen: LoginPage }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginPage',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
