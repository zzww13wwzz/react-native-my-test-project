import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';


class Header extends Component {

    state = {
        visibleModal: null,
    };

    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );

    _renderModalContent = () => (
        <View style={styles.modalContent}>
            <Text>Hello!</Text>
            {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
        </View>
    );

    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Summary: {this.props.summaryText}$</Text>
                <Button title='continue' onPress={() => this.setState({ visibleModal: 1 })}/>

                <Modal isVisible={this.state.visibleModal === 1}>
                    {this._renderModalContent()}
                </Modal>
            </View>
        );
    }
};

const stylesModal = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
});

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 70,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,

        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        // elevation: 100,
        // position: 'absolute'

    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    }
};

export default Header;
