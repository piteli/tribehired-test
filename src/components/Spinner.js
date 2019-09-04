import React from "react";
import { View, Text, ActivityIndicator } from "react-native"

export default class Spinner extends React.Component {

  render(){
    return (
        <View style={[{flex : 1, flexDirection : "column", alignItems : "center", justifyContent : "center"}, this.props.customStyle != undefined ? this.props.customStyle : null]}>
        <ActivityIndicator size={this.props.spinnerSize != undefined ? this.props.spinnerSize : 'large'}/>
        </View>
    )
  }
}
