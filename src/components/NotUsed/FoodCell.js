import React, {Component} from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
// import { StackNavigator } from 'react-navigation';

const FoodCell = (props) => {

    const {textStyle, viewStyle, roundButtonStyle} = styles;
    return (
        <View>
            <Image
                style={{width: 50, height: 50}}
                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={this.onPress}//showDetails}
            >
                <Text> Touch Here </Text>
            </TouchableOpacity>
            <View style={{flex:1 , marginRight:10}} >
                <Button style={roundButtonStyle} title = 'default' onPress={() => this.onPress}/>
            </View>

            <Text style={textStyle}>{props.foodText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 15,
        // shadowColor: 'black',
        // shadowOffset: {width:0, height: 2},
        // shadowOpacity:0.2,
        // elevation: 100,
        // position: 'absolute'

    },
    textStyle: {
        fontSize: 20,
        // backgroundColor: 'deepskyblue',
        justifyContent: 'center',
        alignItems: 'center',

    },
    roundButtonStyle: {
        borderWidth:1,
        backgroundColor: 'deepskyblue',
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:100,
    }
};

export default FoodCell;
