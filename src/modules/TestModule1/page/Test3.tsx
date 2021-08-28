import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, CheckBox} from 'react-native-elements';
import {Formik} from 'formik';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-datepicker';
import {registered} from '../../../service/login/login';
import moment from 'moment';

const Test3: React.FC<any> = props => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const registeredHandler = async (value: any) => {
    setLoading(true);
    value.birth = moment(value.birth).toDate();
    try {
      const res = await registered(value);
      setLoading(false);
      console.log(res);
      navigation.goBack();
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Formik
        initialValues={{
          name: '',
          password: '',
          sex: false,
          birth: '2016-05-09',
        }}
        onSubmit={values => registeredHandler(values)}>
        {({handleChange, handleBlur, handleSubmit, setFieldValue, values}) => (
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

            <Col style={{width: '100%', height: 20, marginTop: 50}}>
              <Row style={{flex: 1, flexDirection: 'column'}}>
                <Text style={{marginLeft: 5}}> 您的性别</Text>
                <Col
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Row style={{height: 45}}>
                    <CheckBox
                      containerStyle={{padding: 8}}
                      size={14}
                      textStyle={{fontSize: 12}}
                      title="男生"
                      checked={values.sex}
                      onPress={() => {
                        setFieldValue('sex', !values.sex);
                      }}
                    />
                  </Row>
                  <Row style={{height: 45}}>
                    <CheckBox
                      containerStyle={{padding: 8}}
                      size={14}
                      textStyle={{fontSize: 12}}
                      title="女生"
                      checked={!values.sex}
                      onPress={() => {
                        setFieldValue('sex', !values.sex);
                      }}
                    />
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col style={{width: '100%', height: 20, marginTop: 50}}>
              <Row style={{flex: 1, flexDirection: 'column'}}>
                <Text style={{marginLeft: 5}}> 您的生日</Text>
                <DatePicker
                  style={{width: '100%'}}
                  date={values.birth}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="2016-05-01"
                  maxDate="2016-06-01"
                  is24Hour
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 5,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                      marginLeft: 36,
                      height: 26,
                      borderColor: 'rgba(0,0,0,.0)',
                      borderBottomColor: '#000',
                      width: '100%',
                    },
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={date => {
                    setFieldValue('birth', date);
                  }}
                />
              </Row>
            </Col>

            <Col style={{width: '100%', height: 50, marginTop: 50}}>
              <Row style={{flex: 1, flexDirection: 'column'}}>
                <Text style={{marginLeft: 5}}> 您的密码</Text>
                <Input
                  placeholder="请输入您的密码"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  secureTextEntry
                  onBlur={handleBlur('password')}
                  leftIcon={<Icon name="user" size={24} color="black" />}
                />
              </Row>
            </Col>

            <Col style={{width: '100%', height: 50, marginTop: 50}}>
              <Button
                title="注册"
                loading={loading}
                onPress={() => {
                  handleSubmit();
                }}
              />
            </Col>
          </Grid>
        )}
      </Formik>
    </View>
  );
};
export default Test3;
