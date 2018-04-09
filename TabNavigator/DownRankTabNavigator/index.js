import { StackNavigator } from 'react-navigation';
import DownRank from '../../Screens/DownRank';

export default DownRankTabNavigator = StackNavigator({
  DownRank: {
    screen: DownRank,
    key: 'DownRank',
  }
},
  {
    initialRouteName: 'DownRank',
  });
