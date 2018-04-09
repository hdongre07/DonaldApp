import { StackNavigator } from 'react-navigation';
import Rank from '../../Screens/Rank';

export default RankTabNavigator = StackNavigator({
  Rank: {
    screen: Rank,
    key: 'Rank',
  }
},
  {
    initialRouteName: 'Rank',
  });
