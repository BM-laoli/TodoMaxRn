import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {getAppData, getData, storeAppData} from '../../../storage';
const Test1: React.FC<any> = props => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(0); // 0 第一次使用app 1 没有登录  2登录了
  const navigation = useNavigation();
  const route = useRoute();
  const checkFrIstAndLogin = async () => {
    const value = await getAppData();
    const userInfo = await getData();
    setLoading(false);
    if (!value?.isFirst) {
      storeAppData({isFirst: true});
      setState(0);
      return;
    }
    console.log(value);
    if (!userInfo?.access_token?.length) {
      setState(1);
      navigation.replace('Test2');
      return;
    }

    setState(2);
    navigation.replace('DrawerStackNavigator');
  };

  useEffect(() => {
    try {
      checkFrIstAndLogin();
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ScrollView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {loading ? (
          <Text>加载中.....</Text>
        ) : !state ? (
          <Text
            onPress={() => {
              navigation.replace('Test2');
            }}>
            这个是启动页，您目前是第一次使用，点击我开始进入设置登录页👏🏻
          </Text>
        ) : state == 1 ? (
          <Text>正在去登录页...</Text>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default Test1;
