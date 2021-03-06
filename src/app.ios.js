'use strict';

//standard library imports
import React, {
    Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//third party imports
import { 
    Provider, 
    connect 
} from 'react-redux';

//local imports
import configureStore from './store/index';

//local constants
const store = configureStore();


export default class MockStoreApp extends Component {
  render() {
    return (
        <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    }
});