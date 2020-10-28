import React, {Component} from 'react';
import {AppRegistry, Dimensions} from 'react-native';
import {DrawerNavigator} from 'react-navigation';

import Drawer from './drawer';
import App from  './App';


const drawernav = DrawerNavigator({
    Item1: {
        screen: App,
    }
    },
    {
      contentComponent: Drawer,
      drawerWith: Dimensions.get('window').width - 120,
 
   
});

AppRegistry.registerComponent('Demo', () => drawernav);