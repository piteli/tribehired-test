import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import PopupSpinner from '../../../components/PopupSpinner';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground
          source={{uri : "https://i.pinimg.com/originals/0a/eb/4f/0aeb4f2ffb03ad1493a45e2192586153.jpg"}}
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

              <TouchableOpacity
                onPress={() => this.props.navigation.push('register')}
                style={{marginTop : 20}}
              >
                <Text allowFontScaling={false} style={{color : 'white', textAlign : 'center'}}>Don't have an account? Press here to register</Text>
              </TouchableOpacity>
              <PopupSpinner loadingSpinnerVisible={this.props.showLoading} textDisplay={"Logging in..."} />

            </View>
        </ImageBackground>
      </View>
    );
  }
}
