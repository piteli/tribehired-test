import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput, Image } from 'react-native';
import { styles } from './styles';
import PopupSpinner from '../../../components/PopupSpinner';
import { Ionicons } from '@expo/vector-icons';

export default class Register extends React.Component {

  render() {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground
          style={{ flex: 1, width: 'auto' }}
        >
            <View style={styles.welcomeContainer}>
              <View style={{flexDirection : 'row', alignItems : 'center', marginBottom: 10}}>
                <TouchableOpacity style={{marginRight : 20}} onPress={() => this.props.navigation.goBack()}>
                <Ionicons name="ios-arrow-back" size={35} color="black" />
                </TouchableOpacity>
                <Text allowFontScaling={false} style={styles.welcomeText}>
                  Sign up
                </Text>
              </View>

            <Text allowFontScaling={false} style={styles.inputText}>
                Email Address{"\u00a0"}
                <Text style={{ color: 'red' }}>*</Text>
              </Text>

              <View style={styles.textBoxBtnHolder}>
                <TextInput
                  allowFontScaling={false}
                  placeholder='johny@xyz.com'
                  placeholderTextColor='gray'
                  underlineColorAndroid="transparent"
                  style={styles.textBox}
                  autoCapitalize="none"
                  onChangeText={(email) => this.props.onChangeInput('email', email)}
                />
              </View>

                <Text allowFontScaling={false} style={styles.inputText}>
                Username{"\u00a0"}
                <Text style={{ color: 'red' }}>*</Text>
              </Text>

              <View style={styles.textBoxBtnHolder}>
                <TextInput
                  allowFontScaling={false}
                  placeholder='Johny'
                  placeholderTextColor='gray'
                  underlineColorAndroid="transparent"
                  style={styles.textBox}
                  autoCapitalize="none"
                  onChangeText={(username) => this.props.onChangeInput('username', username)}
                />
              </View>

              <Text allowFontScaling={false} style={styles.inputText}>
                Password{"\u00a0"}
                <Text style={{ color: 'red' }}>*</Text>
              </Text>

              <View style={styles.textBoxBtnHolder}>
                <TextInput
                  allowFontScaling={false}
                  placeholder='Password'
                  placeholderTextColor='gray'
                  underlineColorAndroid="transparent"
                  secureTextEntry={this.props.passwordValueVisible}
                  style={styles.textBox}
                  value={this.props.password}
                  autoCapitalize="none"
                  ref={(input) => { this.password = input; }}
                  onChangeText={(password) => this.props.onChangeInput('password', password)}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.visibilityBtn}
                  onPress={() => this.props.visiblePassword()}>

                  <Image
                    source={(this.props.passwordValueVisible) ? require('../../../../assets/icon/hide.png') : require('../../../../assets/icon/view.png')}
                    style={styles.btnImage}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.signUpBtn}
                onPress={() => this.props.register()}>

                <Text allowFontScaling={false} style={styles.signUpText}>Sign up</Text>

              </TouchableOpacity>
              <PopupSpinner loadingSpinnerVisible={this.props.showLoading} textDisplay={"Registering..."} />
            </View>
        </ImageBackground>
      </View>
    );
  }
}
