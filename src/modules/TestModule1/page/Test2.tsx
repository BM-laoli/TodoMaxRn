import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, Image} from 'react-native-elements';
import {Formik} from 'formik';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {useNavigation, CommonActions, useRoute} from '@react-navigation/native';
import {login} from '../../../service/login/login';
import {storeData} from '../../../storage';
import {resetApp} from '../../../common/debug';
const image4 = require('../../../assets/images/Meeting.png');

const Test2: React.FC<any> = props => {
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const loginHandler = async (value: any) => {
    setLoading(true);
    console.log(value, 1);

    try {
      const res = (await login(value)) as any;
      setLoading(false);
      // 把token存起来
      storeData(res);
      //方法一直接替换掉路Stack 比较局限
      navigation.replace('DrawerStackNavigator' as never);
      // 方法二 rest和dispath 非常的灵活
      // 这里的例子，去掉了登录和注册页面并把 Drawer放到第一个
      // navigation.dispatch(state => {
      //   // Remove the home route from the stack
      //   const routes = state.routes.filter(r => r.name !== 'Test1');
      //   return CommonActions.reset({
      //     ...state,
      //     routes,
      //     index: routes.length - 1,
      //   });
      // });
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{position: 'absolute', top: 0}}>
        <Image source={image4} style={{width: 200, height: 200}} />
      </View>
      <Formik
        initialValues={{name: '', password: ''}}
        onSubmit={values => {
          loginHandler(values);
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <Grid
            style={{
              width: '80%',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <Col style={{width: '100%', height: 50}}>
              <Row style={{flex: 1, flexDirection: 'column'}}>
                <Text style={{marginLeft: 5}}> 用户名</Text>
                <Input
                  placeholder="请输入您的用户名"
                  onChangeText={handleChange('name')}
                  value={values.name}
                  onBlur={handleBlur('name')}
                  leftIcon={<Icon name="user" size={24} color="black" />}
                />
              </Row>
            </Col>

            <Col style={{width: '100%', height: 50, marginTop: 50}}>
              <Row style={{flex: 1, flexDirection: 'column'}}>
                <Text style={{marginLeft: 5}}> 密码</Text>
                <Input
                  placeholder="请输入您的密码"
                  secureTextEntry
                  onChangeText={handleChange('password')}
                  value={values.password}
                  onBlur={handleBlur('password')}
                  leftIcon={<Icon name="user" size={24} color="black" />}
                />
              </Row>
            </Col>

            <Col style={{width: '100%', height: 50, marginTop: 50}}>
              <Col style={{width: '100%', height: 50}}>
                <Button
                  loading={loading}
                  onPress={handleSubmit}
                  title="现在登录"
                />
              </Col>
              <Col style={{width: '100%', height: 50}}>
                <Button
                  onPress={() => {
                    // 这个抛错不要理他能够正常使用
                    navigation.navigate('Test3' as never);
                  }}
                  title="现在注册"
                />
              </Col>
              <Col style={{width: '100%', height: 50}}>
                <Button
                  onPress={() => {
                    // 这个抛错不要理他能够正常使用
                    resetApp();
                    navigation.replace('Test1' as never);
                  }}
                  title="设置成第一次使用App"
                />
              </Col>
            </Col>
          </Grid>
        )}
      </Formik>
    </View>
  );
};
export default Test2;
