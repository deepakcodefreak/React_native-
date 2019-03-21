import React, { Component } from 'react';
import {  View,TextInput, Button } from 'react-native';
import styles from '../Stylesheet/styles';


class PlaceInput extends Component {
  

  render() {
    
    return (
     
        <View style={styles.secondContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="An awesome places"
            value={this.props.placeName}
            onChangeText={this.props.textChangeHandler}
          />
          <Button title="Add" style={styles.placeButton} onPress={this.props.placeAddedHandler} />
        </View>
        
    

    )
  }
};

export default PlaceInput; 