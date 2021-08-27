import React from 'react';
import {View, Text, Button} from 'react-native';

const Test2: React.FC<any> = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Test2!</Text>
      <Button
        title="f返回"
        onPress={() => {
          props?.navigation.navigate('TabNavigator');
        }}
      />
    </View>
  );
};
export default Test2;
