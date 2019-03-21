import React, { Component } from 'react';
import { Modal, View, Text, Button, Image } from 'react-native';
import styles from '../Stylesheet/styles';

class PlaceDetail extends Component {
    render() {
        let modalContent = null;
        if (this.props.placeSelected) {
            modalContent = (
                <View>
                    <Image source={this.props.placeSelected.placeImage} style={styles.modalPlaceImage} />
                    <Text style={styles.modalText}> {this.props.placeSelected.name}</Text>
                </View>
            )
        }
        return (
            <Modal
                onRequestClose={this.props.onModalClosed}
                visible={this.props.placeSelected !== null}
                animationType="slide" >
                <View style={styles.modalContainer}>
                    {modalContent}
                    <View>
                        <Button title="Delete" color="red" onPress={this.props.onPlaceDeleted} />
                        <Button title="Close" onPress={this.props.onModalClosed} />
                    </View>
                </View>
            </Modal>
        );
    }
};

export default PlaceDetail;