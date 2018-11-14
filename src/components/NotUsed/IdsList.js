import React, {Component} from 'react';
import {FlatList, ListView, StyleSheet, Text, View} from 'react-native';

export default class IdsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.title}</Text>
                <FlatList
                    data={this.props.meals}
                    keyExtractor = {(meal) => meal.id.toString()}

                    renderItem={({item}) => <Text>{item.title}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // width: 300,
        // height: 300,
        flex: 1,
        backgroundColor: 'coral',
        alignItems: 'center',
        justifyContent: 'center'
    }
    // bigblue: {
    //     color: 'blue',
    //     fontWeight: 'bold',
    //     fontSize: 30,
    // },
    // red: {
    //     color: 'red',
    // },
});
