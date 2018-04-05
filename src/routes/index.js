import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import Home from '../containers';
import Teams from '../containers/Teams';
import Player from '../containers/Player'
import PlatformOs from '../containers/PlatformOs'
import HeaderCustom from '../components/HeaderCustom'
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

export const AppNavigator = StackNavigator({
  Main: { screen: Home,
  navigationOptions:{
    header:(
      <HeaderCustom icon='false' title='Home'/>
    )
  }
   },

   Team: { screen: Teams,
     navigationOptions:{
       header:(
         <HeaderCustom icon='true' title='Team'/>
       )
     }
   },
   platform: { screen: PlatformOs,
     navigationOptions:{
       header:(
         <HeaderCustom icon='true' title='Platform' />
       )
     }
   },
   player: { screen: Player,
    navigationOptions:{
      header:(
        <HeaderCustom icon='true' title='Player' />
      )
    }
  }
},

{
  initialRouteName: 'Main',
});

export default AppNavigator
