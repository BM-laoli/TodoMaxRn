import React from 'react';
import {View, Text, Button} from 'react-native';

const TabTacksBig: React.FC<any> = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>TabTask2-1!</Text>
      <Button
        title="去Test2页面"
        onPress={() => {
          props?.navigation.navigate('Test2');
        }}
      />
    </View>
  );
};

export default TabTacksBig;
