import React from "react";
import { Text, ActivityIndicator } from "react-native"
import Dialog, { DialogContent, DialogButton } from 'react-native-popup-dialog';

export default class PopupSpinner extends React.Component {

  render() {
    return (
      <Dialog
        visible={this.props.loadingSpinnerVisible}
        onTouchOutside={() => {
          if (this.props.enableClickOutsidePopup) {
            this.props.hidePopup();
          }
        }}
        actions={this.props.enableClickOutsidePopup ? [
          <DialogButton key={1} text="Ok" align="center" onPress={() => { this.props.hidePopup(); }} />
        ] : []}
      >
        <DialogContent style={{ marginTop: 20, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          {this.props.enableClickOutsidePopup ? null : <ActivityIndicator size="large" color="#000000" />}
          <Text style={{ marginLeft: 10 }}>{this.props.textDisplay}</Text>
        </DialogContent>
      </Dialog>
    )
  }
}
