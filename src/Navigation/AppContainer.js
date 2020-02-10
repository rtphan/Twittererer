import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../Screens/Home';
import {TweetsScreen, NewTweetScreen} from '../Screens/Tweets';

export default createAppContainer(
  createStackNavigator(
    {
      Home: HomeScreen,
      Tweets: TweetsScreen,
      NewTweet: NewTweetScreen,
    },
    {
      defaultNavigationOptions: {
        cardStyle: {
          backgroundColor: '#eeeeee',
        },
      },
    },
  ),
);
