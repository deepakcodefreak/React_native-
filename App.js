import React, { Component } from 'react';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/place.jpeg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { View ,Text} from 'react-native';
import styles from './src/components/Stylesheet/styles';


import {connect} from 'react-redux';
import { addPlace } from './src/store/reducers/index';
import { deletePlace } from './src/store/reducers/index';
import { selectPlace } from './src/store/reducers/index';
import { deselectPlace } from './src/store/reducers/index';
import {changeText} from './src/store/actions/index';
import Root from './Root';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/store/reducers/index';

const store = createStore(reducers);


class App extends Component {
 
          render() {
            return (
              <Provider store={store}>
                <Root/>
              </Provider>
            );
          };
  };


       
  export default App;        

