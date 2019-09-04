import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 30

  },
  backButton: {
    alignItems: 'flex-start',
  },
  welcomeContainer: {
    marginTop: 20,
    padding : 20
  },
  welcomeText: {
    fontSize: 33,
    textAlign: 'center',
    marginBottom: 50,
    color : 'white'

  },
  inputText: {
    fontSize: 18,
    paddingStart: 20,
    height: 50,
    borderRadius: 30,
    borderColor: '#DCDCDC',
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: 'white'
  },
  loginBtn: {
    marginTop: 20,
    backgroundColor: '#0094d4',
    borderRadius: 30,
  },
  loginText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    padding: 15
  }
});
