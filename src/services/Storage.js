import React, { Component } from 'react';
import { AsyncStorage } from "react-native";

export default class Storage extends Component {

  async storeItem(key, item) {
     try {
         //we want to wait for the Promise returned by AsyncStorage.setItem()
         //to be resolved to the actual value before returning the value
         var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
         return jsonOfItem;
     } catch (error) {
       console.log(error.message);
     }
  }

  async multiStoreItem(arrays){
    try {
      var jsonOfItem = await AsyncStorage.multiSet(arrays);
      return jsonOfItem;
  } catch (error) {
    console.log(error.message);
  }
  }

  async multiRetrieveItem(arrays){
    try {
      var jsonOfItem = await AsyncStorage.multiGet(arrays);
      return jsonOfItem;
  } catch (error) {
    console.log(error.message);
  }
  }

  async multiRemoveItem(arrays){
    try {
      var jsonOfItem = await AsyncStorage.multiRemove(arrays);
      return jsonOfItem;
  } catch (error) {
    console.log(error.message);
  }
  }

  async retrieveItem(key) {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key);
      const item = JSON.parse(retrievedItem);
      return item;
    } catch (error) {
      console.log(error.message);
    }
    return
}

async removeItem(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    }
    catch(exception) {
      return false;
    }
  }

  async storeItemString(key, item) {
    try {
        //we want to wait for the Promise returned by AsyncStorage.setItem()
        //to be resolved to the actual value before returning the value
        var jsonOfItem = await AsyncStorage.setItem(key, item);
        return jsonOfItem;
    } catch (error) {
      console.log(error.message);
    }
 }

 async retrieveItemString(key) {
   try {
     const retrievedItem =  await AsyncStorage.getItem(key);
     return retrievedItem;
   } catch (error) {
     console.log(error.message);
   }
   return
}


}
