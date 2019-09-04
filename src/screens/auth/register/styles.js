import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  contentContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 30
  },
  welcomeContainer: {
    marginTop: 20,
    padding : 20
  },
  welcomeText: {
    fontSize: 33,
    textAlign: "left"
  },
  HRline: {
    borderBottomColor: "#d4d4d4",
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 15
  },
  inputText: {
    fontSize: 14,
    color: "gray",
    marginTop: 20,
  },
  inputTextDesc: {
    fontSize: 14,
    marginTop: 2,
    marginBottom: 10,
    color: "gray",
  },
  optText: {
    fontSize: 14,
    color: "gray",
    textAlign: "left",
  },
  optSwitch: {
    marginTop: 40,
    marginBottom: 30,
    alignItems: "flex-end"
  },
  signUpBtn: {
    marginTop: 20,
    backgroundColor: "black",
    borderRadius: 30
  },
  signUpText: {
    padding: 20,
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  textBoxBtnHolder:
  {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  textBox:
  {
    fontSize: 18,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    borderBottomWidth: 1,
    paddingVertical: 0,
    borderColor: 'gray',
  },
  visibilityBtn:
  {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },
  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  }
});
