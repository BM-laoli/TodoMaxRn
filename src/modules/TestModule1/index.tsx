import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Provider} from 'mobx-react';
import {
  AppStack,
  DrawerStack1Config,
  DrawerStack2Config,
  DrawerStackCon,
  HomeStackConfig,
  SettingsStackConfig,
  TabStackConfig,
} from './Router';
import Test1ModuleStore from './Store';

// 浮动弹出层
import {RootSiblingParent} from 'react-native-root-siblings';

//国际化
import '../../i18n/i18n.ts';
//AppStack
const TestNodules = createNativeStackNavigator();
function TestNodulesStack(props: any) {
  return (
    <TestNodules.Navigator {...AppStack}>
      {AppStack.Screen.map((item, index) => {
        return (
          <TestNodules.Screen
            key={index}
            options={item.option}
            name={item.name}
            component={item.components}
          />
        );
      })}
    </TestNodules.Navigator>
  );
}

// TabStack & ChildStack
const HomeStack = createNativeStackNavigator();
export function HomeStackScreen() {
  return (
    <HomeStack.Navigator {...HomeStackConfig}>
      {HomeStackConfig.Screen.map((item, index) => {
        return (
          <HomeStack.Screen
            key={index}
            options={item.option}
            name={item.name}
            component={item.components}
          />
        );
      })}
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();
export function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator {...SettingsStackConfig}>
      {SettingsStackConfig.Screen.map((item, index) => {
        return (
          <SettingsStack.Screen
            key={index}
            options={item.option}
            name={item.name}
            component={item.components}
          />
        );
      })}
    </SettingsStack.Navigator>
  );
}

const TabNai = createBottomTabNavigator();
export const TabNavigator = () => {
  return (
    <TabNai.Navigator
      {...TabStackConfig}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName || ''} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      {TabStackConfig.Screen.map((item, index) => {
        return (
          <TabNai.Screen
            key={index}
            options={item.option}
            name={item.name}
            component={item.components}
          />
        );
      })}
    </TabNai.Navigator>
  );
};

// DrawerStack and ChildStack
const DrawerStack = createNativeStackNavigator();
export function DrawerStackScreen() {
  return (
    <DrawerStack.Navigator {...DrawerStack1Config}>
      {DrawerStack1Config.Screen.map((item, index) => {
        return (
          <DrawerStack.Screen
            key={index}
            options={item.option}
            name={item.name}
            component={item.components}
          />
        );
      })}
    </DrawerStack.Navigator>
  );
}

const Drawer2Stack = createNativeStackNavigator();
export function Drawer2StackScreen() {
  return (
    <Drawer2Stack.Navigator {...DrawerStack2Config}>
      {DrawerStack2Config.Screen.map((item, index) => {
        return (
          <Drawer2Stack.Screen
            key={index}
            options={item.option}
            name={item.name}
            component={item.components}
          />
        );
      })}
    </Drawer2Stack.Navigator>
  );
}

const StackDrawer = createDrawerNavigator();
export const DrawerStackNavigator = () => {
  return (
    <StackDrawer.Navigator initialRouteName="TabNavigator">
      {DrawerStackCon.Screen.map((item, index) => {
        return (
          <TabNai.Screen
            key={index}
            options={item.option}
            name={item.name}
            component={item.components}
          />
        );
      })}
    </StackDrawer.Navigator>
  );
};

function App() {
  return (
    <RootSiblingParent>
      <Provider {...Test1ModuleStore}>
        <NavigationContainer>
          <TestNodulesStack />
        </NavigationContainer>
      </Provider>
    </RootSiblingParent>
  );
}

export default App;
// 如果需要是哟Drewar 需要安装react-native-reanimated 和 react-native-gesture-handler
