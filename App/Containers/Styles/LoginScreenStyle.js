import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.onFlick
  },
  inputContainer: {
      height: 300,
      paddingTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
  },
  backgroundImg: {
    height: 300,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPassContainer: {
    flexDirection: 'row',
    margin: 10
  },
  forgotText:{
      fontSize: 20,
      color: Colors.hyperLink
  },
  linkStyle: {
      
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 350,
    width: 400,
    paddingTop: 50,
    paddingBottom: 5
  },
  logo: {
    height: 300,
    width: 300,
    borderRadius: 150
  },
  formContainer: {

  },
  header: {
    paddingTop: 30,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FFF',
    marginTop: 10,
    textAlign: 'center'
  },
  slogan: {
    fontSize: 15,
    color: '#FFF',
    marginTop: 10,
    textAlign: 'center'
  },
  register: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  registerClick: {
    marginRight: 100,
    paddingBottom: 20
  },
  inputBoxes: {
    height: 40,
    backgroundColor: '#FFF',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: 400
  },
  buttonContainer: {
    height: 40,
    borderRadius: 10,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.hyperLink,
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin,
    width: 400
  }
})