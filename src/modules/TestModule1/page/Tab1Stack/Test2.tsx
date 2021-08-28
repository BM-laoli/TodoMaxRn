import {inject, observer} from 'mobx-react';
import React from 'react';
import {View, Text, Button} from 'react-native';
@inject('todoStore')
@observer
class TabTacks2 extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {};
    console.log(this.props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>TabTack1-2!</Text>
        <Button
          title="去Test-2"
          onPress={() => {
            navigation.navigate('Tab1S2');
          }}
        />
      </View>
    );
  }
}

export default TabTacks2;
