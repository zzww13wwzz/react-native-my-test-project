import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import HomeScreen from './src/components/HomeScreen';
import MealDetails from './src/components/MealDetails';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{paddingTop: 0}}>

            <Scene key="root">
                <Scene key="home"
                       onRight={() => console.log('show popup')}
                       rightTitle='another day'
                       component={HomeScreen}
                       title='Food is good'
                       initial
                />
                <Scene key="mealDetail"
                       component={MealDetails}
                       title='Details'
                       backTitle=" "
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
