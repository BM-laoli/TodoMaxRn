import React, {useState} from 'react';
import {View, Text, Button, ScrollView, FlatList} from 'react-native';
import {logOut} from '../../../../common/debug';
import {ListItem, Avatar, Divider, Icon} from 'react-native-elements';
import {useLocalObservable, useObserver} from 'mobx-react';
import {todoStore} from '../../Store';
import {SpeedDial} from 'react-native-elements';
import Modals from './Test3';
const list = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
];

const TabTacks1: React.FC<any> = props => {
  const logout = async () => {
    await logOut();
    props?.navigation.replace('Test2');
  };

  const [open, setOpen] = useState(false);

  const addS = () => {
    todoStore.setCount();
    // 像使用函数一样使用也是可以的
  };

  return useObserver(() => {
    return (
      <View>
        <ScrollView>
          <View style={{height: 600}}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View>
                <Text>TabTacks1!</Text>
                <Button
                  title="去Test1-2页面"
                  onPress={() => {
                    props?.navigation.navigate('Tab1S2');
                  }}
                />

                <Button
                  title="登出"
                  onPress={() => {
                    logout();
                  }}
                />
              </View>
            </View>
            <Divider />
            <View>
              {list.map((item, i) => (
                <ListItem key={i} bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title>{item.title}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
            </View>
          </View>
        </ScrollView>
        <SpeedDial
          isOpen={open}
          icon={{name: 'edit', color: '#fff'}}
          openIcon={{name: 'close', color: '#fff'}}
          onOpen={() => setOpen(!open)}
          onClose={() => setOpen(!open)}>
          <SpeedDial.Action
            icon={{name: 'add', color: '#fff'}}
            title="Add"
            onPress={() => console.log('Add Something')}
          />
          <SpeedDial.Action
            icon={{name: 'delete', color: '#fff'}}
            title="Delete"
            onPress={() => console.log('Delete Something')}
          />
        </SpeedDial>
      </View>
    );
  });
};

export default TabTacks1;
