import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import { FeedListScreen } from './feed_list'
import { RecommScreen } from './recommendation'

import { createBottomTabNavigator } from 'react-navigation';


export const BottomTabNavigator = createBottomTabNavigator({
    FeedList: FeedListScreen,
    Recomm: RecommScreen,
});