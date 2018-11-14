import React from 'react';
import {Text, View, Image, Button, TouchableOpacity} from 'react-native';
import MealCell from './MealCell'
import BuyButton from './BuyButton';

const MealCellSubView = ({meal, onPressBuy, onPressCell}) => {
    const {title, price, image} = meal;
    const {
        imageStyle,
        imageViewStyle,
        textViewStyle,
        textStyle
    } = style;

    return (
        <MealCell onPressCell={onPressCell}>
            <View style={imageViewStyle}>
                <Image
                    style={imageStyle}
                    source={{uri: image}}
                />
                <Text>{title}</Text>
            </View>
            <View style={textViewStyle}>
                <Text style={textStyle}>Price: {price}$</Text>
            </View>
            <BuyButton onPressBuy={onPressBuy}/>
        </MealCell>
    );
};

const style = {
    imageViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0,
        marginRight: 0,
    },
    imageStyle: {
        width: 100,
        height: 100,
    },
    textStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10,
        fontSize: 20,
    },
    textViewStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10,

    },
}

export default MealCellSubView;