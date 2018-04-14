/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform
} from 'react-native';
import TabNavigator from './TabNavigator'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { rootSaga } from './sagas'
import homeReducer from './Screens/Home/home.reducer'

const reducer = combineReducers({home: homeReducer})
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    );
  }
}

