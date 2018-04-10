/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TweetsCard from './component/TweetsCard'

type Props = {};
export default class Home extends Component<Props> {
  static navigationOptions = {
    title: 'Home',
    titleStyle: {
      /* this only styles the title/text (font, color etc.)  */
    },
    style: {
      backgroundColor: 'red',
      color: 'red'
      /* this will style the header, but does NOT change the text */
    },
    tintColor: {
      backgroundColor: 'red'
      /* this will color your back and forward arrows or left and right icons */
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TweetsCard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
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
  },
});
