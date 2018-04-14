import { TabNavigator, StackNavigator } from 'react-navigation';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
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
        tabBarIcon: ({ focused }) => (
          focused ?  <IconAwesome name='home' size={25} color='white' /> :         
           <IconAwesome name='home' size={25} color='white' style={{opacity:0.7}}/>
        ),
    }
  },
  RankTabNavigator: {
    screen: RankTabNavigator,
    key: 'RankTabNavigator',
    navigationOptions: {
        tabBarIcon: ({ focused }) => (
          focused ?  <IconAwesome name='level-up' size={25} color='white' /> :         
          <IconAwesome name='level-up' size={25} color='white' style={{opacity:0.7}}/>

          
        ),
    }
  },
  DownRankTabNavigator: {
    screen: DownRankTabNavigator,
    key: 'DownRankTabNavigator',
    navigationOptions: {
        tabBarIcon: ({ focused }) => (
          focused ?  <IconAwesome name='level-down' size={25} color='white' /> :         
          <IconAwesome name='level-down' size={25} color='white' style={{opacity:0.7}}/>
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