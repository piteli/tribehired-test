import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import PopupSpinner from '../../../components/PopupSpinner';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground
          source={{uri : "https://cdn.pixabay.com/photo/2016/06/17/06/04/background-1462755_960_720.jpg"}}
          style={{ flex: 1, width: '100%' }}
        >
          <View style={styles.welcomeContainer}>
              <Text allowFontScaling={false} style={styles.welcomeText}>Log in</Text>
              <TextInput
                style={styles.inputText}
                placeholder='Email'
                autoCapitalize="none"
                onChangeText={(text) => this.props.onChangeInput('email', text)}
              />

              <TextInput
                style={styles.inputText}
                placeholder='Password'
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={(text) => this.props.onChangeInput('password', text)}
              />

              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => this.props.login()}
              >
                <Text allowFontScaling={false} style={styles.loginText}>Log in</Text>
              </TouchableOpacity>
              <PopupSpinner loadingSpinnerVisible={this.props.showLoading} textDisplay={"Logging in..."} />

            </View>
        </ImageBackground>
      </View>
    );
  }
}
