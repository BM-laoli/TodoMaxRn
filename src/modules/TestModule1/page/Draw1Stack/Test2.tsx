import React from 'react';
import {View, Text, Button} from 'react-native';

const D1Test2: React.FC<any> = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>TabTack1-2!</Text>
      <Button
        title="去App功能页面"
        onPress={() => {
          props?.navigation.navigate('TabNavigator');
        }}
      />
    </View>
  );
};
export default D1Test2;
