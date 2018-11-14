import React from 'react';
import {View, TouchableOpacity} from 'react-native';


const MealCell = (props) => {
    const {containerStyle, sectionStyle} = style;
    const {onPressCell} = props;

    return (
        <TouchableOpacity onPress={onPressCell}>
            <View style={containerStyle}>
                <View style={sectionStyle}>
                    {props.children}
                </View>
            </View>
        </TouchableOpacity>
    );
};

const style = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,

        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,

        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    sectionStyle: {
        borderBottomWidth: 1,
        padding: 15,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }


}

export default MealCell;