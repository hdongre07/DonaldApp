/**
 * Sample React Native RateView
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
var { height, width } = Dimensions.get('window');

type Props = {};
export default class RateView extends Component<Props> {

  render() {
    return (
      this.props.toggle ? <TouchableOpacity
        style={styles.rateView}
        onPress={() => this.props.onPressToggle()}
      >
      <TouchableOpacity activeOpacity={1} style={styles.ratingBox}>
      <View style={styles.verticalTextBox}>
        <Text style={styles.titles}>Gross</Text>
        <Text style={styles.titles}>Heinous</Text>
        <Text style={styles.titles}>Nauseating</Text>
        <Text style={styles.titles}>Migrain</Text>
        <Text style={styles.titles}>I Threw Up</Text>
        </View>
      <View style={styles.verticalBox}>
          <TouchableOpacity onPress={()=>{this.props.onPressRateValue(1)}} style={this.props.rateValue ===1 ? styles.filledBubble:styles.emptyBubble}/>
          <TouchableOpacity onPress={()=>{this.props.onPressRateValue(2)}} style={this.props.rateValue ===2 ? styles.filledBubble:styles.emptyBubble}/>
          <TouchableOpacity onPress={()=>{this.props.onPressRateValue(3)}} style={this.props.rateValue ===3 ? styles.filledBubble:styles.emptyBubble}/>
          <TouchableOpacity onPress={()=>{this.props.onPressRateValue(4)}} style={this.props.rateValue ===4 ? styles.filledBubble:styles.emptyBubble}/>
          <TouchableOpacity onPress={()=>{this.props.onPressRateValue(5)}} style={this.props.rateValue ===5 ? styles.filledBubble:styles.emptyBubble}/>
          <TouchableOpacity onPress={()=>{this.props.onPressRateValue(6)}} style={this.props.rateValue ===6 ? styles.filledBubble:styles.emptyBubble}/>
          <TouchableOpacity onPress={()=>{this.props.onPressRateValue(7)}} style={this.props.rateValue ===7 ? styles.filledBubble:styles.emptyBubble}/>
          <TouchableOpacity onPress={()=>{this.props.onPressRateValue(8)}} style={this.props.rateValue ===8 ? styles.filledBubble:styles.emptyBubble}/>
          <TouchableOpacity onPress={()=>{this.props.onPressRateValue(9)}} style={this.props.rateValue ===9 ? styles.filledBubble:styles.emptyBubble}/>
          <TouchableOpacity onPress={()=>{this.props.onPressRateValue(10)}} style={this.props.rateValue ===10 ? styles.filledBubble:styles.emptyBubble}/>
        </View>
      </TouchableOpacity>
      </TouchableOpacity> : null
    );
  }
}

const styles = StyleSheet.create({
  rateView: {
    position: 'absolute',
    flex: 1,
    width,
    height,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems:'center',
    justifyContent:'center'
  },
  ratingBox: {
    width:200,
    height: height-150,
    borderWidth:1,
    borderColor:'yellow',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(255,255,255,0.8)',
    flexDirection:'row'
  },
  verticalTextBox:{
    height: height - 150,
    // backgroundColor:'rgba(0,0,0,0.8)',
    justifyContent:'space-around',
  },
  verticalBox:{
    height: height - 150,
    width:20,
    backgroundColor:'rgba(0,0,0,0.8)',
    justifyContent:'space-between',
    marginLeft: 20,
    borderRadius:10,
    alignItems:'center'
  },
  filledBubble: {
    height:24,
    width:24,
    borderRadius:12,
    backgroundColor:'white'
  },
  emptyBubble: {
    height:20,
    width:20,
    borderRadius:10,
    borderWidth:1,
    borderColor:'white'
  },
  titles: {
    fontSize:16,
    fontWeight:'600',
    color:'red'
  }
});
