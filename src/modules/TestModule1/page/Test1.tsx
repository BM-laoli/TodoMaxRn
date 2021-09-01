import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState, Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  LogBox,
} from 'react-native';
import {DebugManager} from '../../../../core/react-native-debug-tool';
import {Button, Image} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import {getAppData, getData, storeAppData} from '../../../storage';
import DeviceInfo from 'react-native-device-info';
import {Alert} from 'react-native';
import RootSiblingsManager from 'react-native-root-siblings';
import Toast from 'react-native-easy-toast';

const image1 = require('../../../assets/images/Agreements.png');
const image2 = require('../../../assets/images/CashFlow.png');
const image3 = require('../../../assets/images/CustomerResearch.png');
const image4 = require('../../../assets/images/Meditation.png');

// 这里想当与是一个Main 必须要 一些地方的集成的东西都在这里了
const Test1: React.FC<any> = props => {
  const _toastRef = React.useRef<Toast>(null) as React.RefObject<Toast>;
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(0); // 0 第一次使用app 1 没有登录  2登录了
  const navigation = useNavigation();
  const route = useRoute();

  const initSync = async () => {
    let serverUrlMap = new Map();
    serverUrlMap.set('Online', '192.168.124.16:3000');
    for (let i = 1; i < 4; i++) {
      serverUrlMap.set('test00' + i, `https://domain-00${i}.net`);
    }
    DebugManager.initDeviceInfo(DeviceInfo).initServerUrlMap(
      serverUrlMap,
      'Online',
      baseUrl => {
        setTimeout(
          () => Alert.alert('环境切换', '服务器环境已经切换至' + baseUrl),
          1000,
        );
      },
    );
    DebugManager.showFloat(RootSiblingsManager);
  };

  const checkFrIstAndLogin = async () => {
    const value = await getAppData();
    const userInfo = await getData();
    setLoading(false);
    if (!value?.isFirst) {
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
      LogBox.ignoreAllLogs();
      initSync();

      checkFrIstAndLogin();
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const ViewLoading = () => {
    return (
      <View style={styles.slide1}>
        <ImageBackground
          source={image4}
          resizeMethod="scale"
          style={styles.image}></ImageBackground>
        <Text style={styles.text}>loading....</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <ViewLoading />
      ) : !state ? (
        <Swiper style={styles.wrapper} loop autoplay showsButtons={false}>
          <View style={styles.slide1}>
            <ImageBackground
              source={image1}
              resizeMethod="scale"
              style={styles.image}></ImageBackground>
            <Text style={styles.text}>欢迎使用TodoMax</Text>
          </View>
          <View style={styles.slide2}>
            <ImageBackground
              source={image2}
              resizeMethod="scale"
              style={styles.image}></ImageBackground>
            <Text style={styles.text}>在这里遇见更好的自己</Text>
          </View>
          <View style={styles.slide3}>
            <ImageBackground
              source={image3}
              resizeMethod="scale"
              style={styles.image}></ImageBackground>
            <View>
              <Button
                title="开始使用"
                onPress={() => {
                  storeAppData({isFirst: true});
                  navigation.replace('Test2');
                }}></Button>

              <Button
                title="去WebView"
                onPress={() => {
                  navigation.push('WebView');
                }}></Button>
              <Button
                title="去极光"
                onPress={() => {
                  navigation.push('JpushDemo');
                }}></Button>
            </View>

            <View>
              <Button
                title="提示"
                onPress={() => {
                  _toastRef.current?.show('show demo');
                }}></Button>
            </View>

            <Toast ref={_toastRef} position="bottom" />
          </View>
        </Swiper>
      ) : state == 1 ? (
        <ViewLoading />
      ) : null}
    </View>
  );
};

export default Test1;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    color: 'rgba(0,0,0, .65)',
    fontSize: 30,
    fontWeight: 'bold',
  },

  image: {
    width: 250,
    height: 255,
  },
});
