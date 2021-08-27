import React from 'react';
import {View, Text, Button} from 'react-native';

const D2T1: React.FC<any> = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>D2T1!</Text>
      <Button
        title="去Test1-2页面"
        onPress={() => {
          props?.navigation.navigate('D2T2');
        }}
      />
    </View>
  );
};

export default D2T1;
