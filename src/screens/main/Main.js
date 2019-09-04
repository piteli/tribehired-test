import React from 'react';
import { View, Text } from 'react-native';
import AppStack from '../../navigations/stack/AppStack';
import { styles } from './styles';


export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <AppStack />
      </View>
    );
  }
}
