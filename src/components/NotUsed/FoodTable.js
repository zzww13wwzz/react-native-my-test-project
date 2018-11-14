import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import FoodCell from './FoodCell';


export default class FoodTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const meal = this.props.meal;
        // const {meals} = this.state;
        return (
            <View style={styles.container}>

                <SectionList
                    sections={[
                        {title: 'Today', data: ['11']},  //['Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin']
                        {title: 'Tomorrow', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie', 'Devin', 'Devin', 'Devin']},
                    ]}
                    renderItem={({item}) => <FoodCell style={styles.item} foodText={item}/>}
                    // renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    // renderItem={({item}) => <FoodCell headerText={'Food'}/>
                        //
                        // <FoodCell style={styles.item}>{item}</FoodCell>}foodText
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: 'lightcyan',
    },
    item: {
        padding: 10,
        fontSize: 20,
        height: 64,
    },
})

