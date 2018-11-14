import React, {Component} from 'react';

import {StyleSheet, View, ScrollView} from 'react-native';
import MealCellSubView from './MealCellSubView';
import axios from 'axios';
import {Actions} from 'react-native-router-flux';
import Header from './Header';

export default class HomeScreen extends Component {
    state = {meals: []}

    componentDidMount() {
        this.getAll();
    }

    getAll() {
        // axios.get('http://192.168.31.180:3000/meals')
        // axios.get('http://10.0.1.118:3000/meals')
      // axios.get('http://localhost:3000/meals')
      axios.get('http://10.0.1.111:3000/meals')
            .then(response => this.setState({meals: response.data}));
    }

    renderFoodList() {
        return this.state.meals.map(meal =>
            <MealCellSubView
                key={meal.id}
                meal={meal}
                onPressBuy={() =>
                    console.log('buy')
                }
                onPressCell={() =>
                    Actions.mealDetail(meal)
                }
            />
        );
    }


    render() {
        const {meals} = this.state;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Header summaryText={'111'} />
                    {this.renderFoodList()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'wheat',
    }
});


