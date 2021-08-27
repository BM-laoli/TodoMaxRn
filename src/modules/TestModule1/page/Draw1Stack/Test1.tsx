import React from 'react';
import {View, Text, Button} from 'react-native';

const D1Test1: React.FC<any> = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>D1Test1!</Text>
      <Button
        title="去DTest2页面"
        onPress={() => {
          props?.navigation.navigate('D1Test2');
        }}
      />
    </View>
  );
};

export default D1Test1;
