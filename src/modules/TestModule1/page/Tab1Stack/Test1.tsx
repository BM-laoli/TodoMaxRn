import React from 'react';
import {View, Text, Button} from 'react-native';

const TabTacks1: React.FC<any> = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>TabTacks1!</Text>
      <Button
        title="去Test1-2页面"
        onPress={() => {
          props?.navigation.navigate('Tab1S2');
        }}
      />
    </View>
  );
};

export default TabTacks1;
