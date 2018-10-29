import { StackNavigator } from 'react-navigation'
import LocationPage from '../Containers/LocationPage'
import HomeScreen from '../Containers/HomeScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import Register from '../Containers/Register'
import LandingScreen from '../Containers/LandingScreen'
import Login from '../Containers/Login'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginPage from '../Containers/Login'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LocationPage: { screen: LocationPage },
  HomeScreen: { screen: HomeScreen },
  RegisterScreen: { screen: RegisterScreen },
  Register: { screen: Register },
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
