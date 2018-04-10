import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import donald from '../../../assests/donald.jpg'
var { height, width } = Dimensions.get('window');

const ClaimsListRow = props => (
  <TouchableOpacity
    disabled={!props.item.count > 0}
    onPress={() => {
      props.onPressCategoryCell(props.item);
    }}
  >
    <View style={[styles.listRow, { backgroundColor: (props.item.count > 0) ? 'white' : 'rgba(255,255,255,0.7)' }]}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
        <View style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name={props.item.imageName} size={25} color="rgba(0,0,0,0.2)" />
        </View>
        <Text style={styles.titleText}>{props.item.title}</Text>
        <Text style={{ marginLeft: 10 }}>{props.item.count}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginRight: 20 }}>
        <Icon name={'angle-double-right'} size={15} color="rgba(0,0,0,0.2)" />
      </View>
    </View>
  </TouchableOpacity>
);

const TweetsCard = props => (
  <View style={styles.container}>
    <View style={styles.TweetsCardContainer}>
      <View style={styles.header}>
        <Image source={donald} style={styles.profileImage} />
        <View>
        <Text style={styles.userTitle}>Donald J. Trump</Text>
        <Text style={styles.userSubtitle}>@realDonaldTrump</Text>
        </View>
      </View>
      <Text style={styles.status}>Congratulations to Patrick Reed on his 
        great and courageous MASTERS win! When Patrick 
        had his amazing win at Doral 5 years ago, 
        people saw his great talent, and a 
        bright future ahead. 
        Now he is the Masters Champion!
      </Text>
      <Text style={styles.date}>9:12 AM - 4 Feb 2017</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  TweetsCardContainer: {
    width: width - 40,
    margin: 10,
    padding: 10,
    backgroundColor: 'rgb(230,230,230)',
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'yellow'
  },
  userTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10
  },
  userSubtitle: {
    fontSize: 12,
    fontWeight:'400',
    color:'grey',
    marginLeft:10
  },
  header: {
    flexDirection: 'row',
  },
  status: {
    fontSize: 14,
    fontWeight:'400',
    marginTop: 20
  },
  date: {
    fontSize: 13,
    color:'rgb(80,80,80)',
    marginTop:10,

  }
});

export default TweetsCard;
