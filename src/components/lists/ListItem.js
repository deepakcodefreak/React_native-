import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../Stylesheet/styles';

class ListItem extends Component {
    render() {
        const place = this.props.place;
        return (
            <TouchableOpacity onPress={this.props.onItemPressed}>
                <View style={styles.list} >
                    <Image resizeMode='cover' source={this.props.placeImage} style={styles.placeImage} />
                    <Text>{place}</Text>
                </View>
            </TouchableOpacity>

        )
    }
};



export default ListItem;