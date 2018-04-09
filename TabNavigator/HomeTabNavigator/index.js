import { StackNavigator } from 'react-navigation';
import Home from '../../Screens/Home';

export default HomeTabNavigator = StackNavigator({
  Home: {
    screen: Home,
    key: 'Home',
  }
},
  {
    initialRouteName: 'Home',
  });
