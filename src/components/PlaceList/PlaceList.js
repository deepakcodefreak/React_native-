import React, { Component } from 'react';
import { FlatList } from 'react-native';
import styles from '../Stylesheet/styles';
import ListItem from '../lists/ListItem';

class PlaceList extends Component {
    render() {
        return (
            <FlatList
                style={styles.listContainer}
                data={this.props.places}
                renderItem={(info) => {
                    return (
                        <ListItem
                            place={info.item.name}
                            placeImage={info.item.placeImage}
                            onItemPressed={() => this.props.onItemSelected(info.item.key)} />
                    )
                }}
            />
        );
    }
};

export default PlaceList;