import React from "react"
import {prodBaseUrlMode, prodBaseUrl, devBaseUrl} from '../config';
import {prodPath} from './production';
import {devPath} from './development';

export default class Env extends React.Component {

  getBaseUrl(){
    return prodBaseUrlMode ? prodBaseUrl : devBaseUrl;
  }

  getPath(){
    return prodBaseUrlMode ? prodPath : devPath;
  }
}
