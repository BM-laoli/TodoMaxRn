import React from 'react';
import {View, Text, Button} from 'react-native';

const TabTaskbig2: React.FC<any> = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>TabStack2-2!</Text>
      <Button
        title="去App功能页面"
        onPress={() => {
          props?.navigation.navigate('TabNavigator');
        }}
      />
    </View>
  );
};
export default TabTaskbig2;
