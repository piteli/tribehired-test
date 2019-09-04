import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { styles } from './styles';
import Spinner from '../../../components/Spinner';
import { AntDesign } from '@expo/vector-icons';
import PopupSpinner from '../../../components/PopupSpinner';

export default class DashboardMain extends Component {

  render() {
    return (
        <View style={styles.mainContainer}>

              <View style={{flexDirection : 'row', alignItems : 'center', marginBottom: 10}}>
                  <View style={{flex : 0.7}}>
                      <Text allowFontScaling={false} style={styles.searchUsersText}>
                        Search Users
                      </Text>
                  </View>
                  <TouchableOpacity style={{flex : 0.3, alignItems : 'flex-end'}} onPress={() => this.props.logout()}>
                        <AntDesign name="logout" size={35} color="black" />
                  </TouchableOpacity>
              </View>

              <View style={{ marginTop: 20 }}>
                  <TextInput
                      placeholder={'Enter Username'}
                      placeholderTextColor='#cccccc'
                      returnKeyType='done'
                      style={{ borderWidth: 1, borderColor: '#bfbfbf', padding: 20, borderRadius: 30, fontSize: 18 }}
                      onChangeText={(string) => this.props.searchRegisteredUsername(string)}
                  />
              </View>
            {

                !this.props.showLoadingData ?

                    this.props.usersData.length != 0 ?

                    <ScrollView style={{ marginTop: 40 }}>
                        {
                          this.props.usersData.map((item, index) => {
                              return (
                                  <View key={index}>
                                      <View>
                                          <Text style={{fontSize : 25, padding : 10}}>{item.username}</Text>
                                      </View>
                                  </View>
                              );
                          })
                        }
                      </ScrollView>
                        :
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <Text allowFontScaling={false} style={{ color: '#909090' }}>No Result Found</Text>
                        </View>
                    :
                    <View style={{ marginTop: 20 }}>
                        <Spinner />
                    </View>
            }
            <PopupSpinner loadingSpinnerVisible={this.props.showLogoutPopup} textDisplay={"Logging out..."} />
        </View>
    )
  }
}
