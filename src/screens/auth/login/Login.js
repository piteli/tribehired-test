import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
          <Text>Here is a login View</Text>
      </View>
    );
  }
}
