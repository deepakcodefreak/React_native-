import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import reducers from './src/store/reducers/index';
import { createStore } from 'redux';

const store = createStore(reducers);

const RNredux = (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('awesome', () => RNredux);