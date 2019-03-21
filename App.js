import React, { Component } from 'react';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import { View } from 'react-native';
import styles from './src/components/Stylesheet/styles';
import placeImage from './src/assets/place.jpeg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { connect } from 'react-redux';
import { addPlace } from './src/store/reducers/index';
import { deletePlace } from './src/store/reducers/index';
import { selectPlace } from './src/store/reducers/index';
import { deselectPlace } from './src/store/reducers/index';




class App extends Component {
 
  textChangeHandler = (text) => {
    // this.setState({ placeName: text })
    this.props.changeText(text);
  };

  placeAddedHandler = () => {

    //   if (this.state.placeName.trim() === '') {
    //     return;
    //   }

    //   this.setState((prevstate) => {
    //     return {
    //       places: prevstate.places.concat({
    //         key: Math.random(),
    //         name: prevstate.placeName,
    //         placeImage: placeImage
    //       })
    //     };
    //   });
    // 

    this.props.addPlace();
  };

    onPlaceDeleted = () => {
      //   this.setState((prevstate) => {
      //     return {
      //       places: prevstate.places.filter((places) => {
      //         return places.key !== prevstate.placeSelected.key;
      //       })
      //     }
      //   });
      //   this.setState({
      //     placeSelected: null
      //   });
      // 
      this.props.deletePlace();
    };

      onModalClosed = () => {
        //   this.setState({
        //     placeSelected: null
        //   })
        // 
        this.props.deselectPlace();
      };

        placeSelectedHandler = (key) => {
          //   this.setState((prevstate) => {
          //     return {
          //       placeSelected: prevstate.places.find((place) => {
          //         return place.key === key;

          //       })
          //     }
          //   });
          
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

        const mapstateToProps = (state) = {
          placeName: state.places.placeName,
          places: state.places.places,
          placeSelected: state.places.placeSelected
        }



        export default connect(mapstateToProps, { 
          addPlace, deletePlace, selectPlace, deselectPlace,changeText
         }) (App);