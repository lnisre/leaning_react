import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { screenStyle } from './styles'

export class RecommScreen extends Component {
    render () {
        return (
            <View style={screenStyle.wrapper} >
                <Text>Recommendation</Text>
            </View>
        )
    }
}