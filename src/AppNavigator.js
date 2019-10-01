import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import home from './screens/home';
import crashlatics from './screens/crashlatics';

const AppStack = createStackNavigator(
  {
    home: {screen: home},
    crashlatics: {screen: crashlatics},
  },
  {
    initialRouteName: 'home',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AppNavigator = createAppContainer(AppStack);

export default AppNavigator;
