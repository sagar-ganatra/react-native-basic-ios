/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   NavigatorIOS,
   StyleSheet
} from 'react-native';
 import { Provider } from 'react-redux';
 import App from './src/containers/App.container';
 import configureStore from './src/store/configureStore';

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#F5FCFF'
   }
 });

const store = configureStore();

export default class NotesTaker extends Component {
  render () {
    return (
        <Provider store={store}>
          <NavigatorIOS
            style={styles.container}
            initialRoute={{
              component: App,
              title: 'Notes'
            }} />
        </Provider>
    );
  }
}

AppRegistry.registerComponent('notesTaker', () => NotesTaker);
