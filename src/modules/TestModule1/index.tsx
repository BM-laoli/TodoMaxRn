import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

// AppStack
import Test1 from './page/Test1';
import Test2 from './page/Test2';

// DrawerStack

// TabStack
import Tab1S1 from './page/Tab1Stack/Test1';
import Tab1S2 from './page/Tab1Stack/Test2';
import Tab2S1 from './page/Tab2Stack/Test1';
import Tab2S2 from './page/Tab2Stack/Test2';
import {Text, View} from 'react-native';

import D1Test1 from './page/Draw1Stack/Test1';
import D1Test2 from './page/Draw1Stack/Test2';
import D2T1 from './page/Draw2Stack/Test1';
import D2T2 from './page/Draw2Stack/Test2';

//AppStack
const TestNodules = createNativeStackNavigator();
function TestNodulesStack(props: any) {
  return (
    <TestNodules.Navigator initialRouteName="Test1">
      <TestNodules.Screen name="Test1" component={Test1} />
      <TestNodules.Screen name="Test2" component={Test2} />
      <TestNodules.Screen name="TabNavigator" component={TabNavigator} />
    </TestNodules.Navigator>
  );
}

// TabStack & ChildStack
const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Tab1S1">
      <HomeStack.Screen name="Tab1S1" component={Tab1S1} />
      <HomeStack.Screen name="Tab1S2" component={Tab1S2} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator initialRouteName="Tab2S1">
      <SettingsStack.Screen name="Tab2S1" component={Tab2S1} />
      <SettingsStack.Screen name="Tab2S2" component={Tab2S2} />
    </SettingsStack.Navigator>
  );
}

const TabNai = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <TabNai.Navigator initialRouteName="Home">
      <TabNai.Screen name="Home" component={HomeStackScreen} />
      <TabNai.Screen name="Settings" component={SettingsStackScreen} />
      <TabNai.Screen
        name="DrawerStackNavigator"
        component={DrawerStackNavigator}
      />
    </TabNai.Navigator>
  );
};

// DrawerStack and ChildStack
const DrawerStack = createNativeStackNavigator();
function DrawerStackScreen() {
  return (
    <DrawerStack.Navigator initialRouteName="D1Test1">
      <DrawerStack.Screen name="D1Test1" component={D1Test1} />
      <DrawerStack.Screen name="D1Test2" component={D1Test2} />
    </DrawerStack.Navigator>
  );
}

const Drawer2Stack = createNativeStackNavigator();
function Drawer2StackScreen() {
  return (
    <Drawer2Stack.Navigator initialRouteName="D2T1">
      <Drawer2Stack.Screen name="D2T1" component={D2T1} />
      <Drawer2Stack.Screen name="D2T2" component={D2T2} />
    </Drawer2Stack.Navigator>
  );
}
const StackDrawer = createDrawerNavigator();
const DrawerStackNavigator = () => {
  return (
    <StackDrawer.Navigator initialRouteName="DrawerStackScreen">
      <StackDrawer.Screen
        name="DrawerStackScreen"
        component={DrawerStackScreen}
      />
      <StackDrawer.Screen
        name="Drawer2StackScreen"
        component={Drawer2StackScreen}
      />
    </StackDrawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <TestNodulesStack />
      {/* <DrawerStackNavigator /> */}
    </NavigationContainer>
  );
}

export default App;

// 如果需要是哟Drewar 需要安装react-native-reanimated 和 react-native-gesture-handler
