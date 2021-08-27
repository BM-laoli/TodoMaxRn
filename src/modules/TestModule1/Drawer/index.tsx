import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import D2T2 from '../page/Draw2Stack/Test2';
import D2T1 from '../page/Draw2Stack/Test1';

const StackDrawer = createDrawerNavigator();
const DrawerStackNavigator = () => {
  return (
    <StackDrawer.Navigator initialRouteName="DrawerStackScreen">
      <StackDrawer.Screen name="DrawerStackScreen" component={D2T2} />
      <StackDrawer.Screen name="Drawer2StackScreen" component={D2T1} />
    </StackDrawer.Navigator>
  );
};

export default DrawerStackNavigator;
