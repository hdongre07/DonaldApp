import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import HomeTabNavigator from './HomeTabNavigator' 
import DownRankTabNavigator from './DownRankTabNavigator' 
import RankTabNavigator from './RankTabNavigator' 

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: 'rgb(202,27,19)',
  },
  titleStyle: {
    fontSize: 12,
    paddingBottom: 15,
    fontWeight: '900',
  },
  indicatorStyle: {
    backgroundColor: 'white',
  },
});

export default TabNavigator({
  HomeTabNavigator: {
    screen: HomeTabNavigator,
    key: 'HomeTabNavigator',
    navigationOptions: {
        tabBarLabel:"HOME",
        tabBarIcon: ({ focused }) => (
          focused ?
          <View style={{backgroundColor: 'white', marginTop: 75, width: 40, height: 2}}/>:
          <View style={{backgroundColor: 'transparent'}}/>
        ),
    }
  },
  RankTabNavigator: {
    screen: RankTabNavigator,
    key: 'RankTabNavigator',
    navigationOptions: {
        tabBarLabel:"Rank",
        tabBarIcon: ({ focused }) => (
          focused ?
          <View style={{backgroundColor: 'white', marginTop: 75, width: 45, height: 2}}/>:
          <View style={{backgroundColor: 'transparent'}}/>
          
        ),
    }
  },
  DownRankTabNavigator: {
    screen: DownRankTabNavigator,
    key: 'DownRankTabNavigator',
    navigationOptions: {
        tabBarLabel:"Down Rank",
        tabBarIcon: ({ focused }) => (
          focused ?
          <View style={{backgroundColor: 'white', marginTop: 75, width: 50, height: 2}}/>:
          <View style={{backgroundColor: 'transparent'}}/>
          
        ),
    }
  }
},
{
  // navigationOptions: ({ navigation }) => ({
  //   tabBarIcon: ({ focused, tintColor }) => {
  //     const { routeName } = navigation.state;
  //     let iconName;
  //     if (routeName === 'Home') {
  //       iconName = `ios-information-circle${focused ? '' : '-outline'}`;
  //     } else if (routeName === 'Settings') {
  //       iconName = `ios-options${focused ? '' : '-outline'}`;
  //     }

  //     // You can return any component that you like here! We usually use an
  //     // icon component from react-native-vector-icons
  //     return <Ionicons name={iconName} size={25} color={tintColor} />;
  //   },
  // }),
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'rgb(226,111,81)',
    style: styles.tabStyle,
    labelStyle: styles.titleStyle,
    indicatorStyle: styles.indicatorStyle,
   // activeBackgroundColor: 'black',
    allowFontScaling: true,
  },
 // tabBarComponent: <View style={{backgroundColor: 'red'}}/>,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
 }
);