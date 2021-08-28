import React from 'react';
import {View, Text, Button} from 'react-native';

const TabTacks2: React.FC<any> = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>TabTack1-2!</Text>
      <Button
        title="去Test-2"
        onPress={() => {
          props?.navigation.navigate('Tab1S2');
        }}
      />
    </View>
  );
};
export default TabTacks2;
