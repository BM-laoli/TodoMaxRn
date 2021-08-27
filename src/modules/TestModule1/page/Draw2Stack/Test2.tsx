import React from 'react';
import {View, Text, Button} from 'react-native';

const D2T2: React.FC<any> = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>TabTack1-2!</Text>
      <Button
        title="D2T2"
        onPress={() => {
          props?.navigation.navigate('TabNavigator');
        }}
      />
    </View>
  );
};
export default D2T2;
