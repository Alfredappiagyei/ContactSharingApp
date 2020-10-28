 import Prototypes from 'prop-types';
import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';

class Drawer extends Component {
    navigateToScreen = (route) => ()=> {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render () {
        return (
            <View>
                <ScrollView>
                    <Text>
                        sction1
                    </Text>
                    <Text>
                        sction1
                    </Text>
                    <Text>
                        sction1
                    </Text>
                    <Text>
                        sction1
                    </Text>
                    <Text>
                        sction1
                    </Text>
                    <Text>
                        sction1
                    </Text>
                    <Text>
                        sction1
                    </Text>
                    <Text>
                        sction1
                    </Text>
                    <Text>
                        sction1
                    </Text>
                    <Text>
                        sction1
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

Drawer.prototypes = {
    navigation: PropTypes.object
};
export default Drawer;
 