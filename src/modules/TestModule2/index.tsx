import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackConfig} from './Router';

//AppStack
const TestNodules = createNativeStackNavigator();
function TestNodulesStack(props: any) {
  return (
    <TestNodules.Navigator {...HomeStackConfig}>
      {HomeStackConfig.Screen.map((item, index) => {
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
function App2() {
  return (
    <NavigationContainer>
      <TestNodulesStack />
    </NavigationContainer>
  );
}

export default App2;
