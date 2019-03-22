import React, { Component } from 'react';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/place.jpeg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { View ,Text} from 'react-native';
import styles from './src/components/Stylesheet/styles';


import {connect} from 'react-redux';
import { addPlace } from './src/store/actions/index';
import { deletePlace } from './src/store/actions/index';
import { selectPlace } from './src/store/actions/index';
import { deselectPlace } from './src/store/actions/index';
import {changeText} from './src/store/actions/index';



class Root extends Component {
 
  textChangeHandler = (text) => {
    this.props.changeText(text);
  };

  placeAddedHandler = () => {
    this.props.addPlace();
  };

  onPlaceDeleted = () => { 
      this.props.deletePlace();
  };

  onModalClosed = () => {
      this.props.deselectPlace();
  };

  placeSelectedHandler = (key) => {
      this.props.selectPlace(key);
  };

          render() {
            return (

              <View style={styles.container}>
                <PlaceInput
                  placeName={this.props.placeName}
                  textChangeHandler={this.textChangeHandler}
                  placeAddedHandler={this.placeAddedHandler}
                />
                <PlaceList
                  onItemSelected={this.placeSelectedHandler}
                  places={this.props.places}
                />
                <PlaceDetail
                  placeSelected={this.props.placeSelected}
                  onPlaceDeleted={this.onPlaceDeleted}
                  onModalClosed={this.onModalClosed}
                />
              </View>

            );
          };
      };

        const mapstateToProps = (state) =>{
            console.log(state)
          return {
            placeName: state.places.placeName,
            places: state.places.places,
            placeSelected: state.places.placeSelected
          }
        }


  export default connect(mapstateToProps,{changeText,addPlace,deletePlace,selectPlace,deselectPlace})(Root);   

