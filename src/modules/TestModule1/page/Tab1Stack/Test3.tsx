import React from 'react';
import Modal from 'react-native-modalbox';

import {
  Text,
  Button,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TextInput,
} from 'react-native';

var screen = Dimensions.get('window');

export default class App extends React.Component<
  {},
  {
    isOpen: boolean;
    isDisabled: boolean;
    swipeToClose: boolean;
    sliderValue: number;
  }
> {
  _ref = React.createRef<Modal>();
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
    };
  }

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just opened');
  }

  onClosingState() {
    console.log('the open/close of the swipeToClose just changed');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Button
          title="opend"
          onPress={() => {
            this._ref.current?.open();
          }}></Button>
        <Modal
          style={[styles.modal, styles.modal1]}
          ref={this._ref}
          swipeToClose={this.state.swipeToClose}
          onClosed={this.onClose}
          onOpened={this.onOpen}
          onClosingState={this.onClosingState}>
          <Text style={styles.text}>Basic modal</Text>
          <Button
            title={`Disable swipeToClose(${
              this.state.swipeToClose ? 'true' : 'false'
            })`}
            onPress={() =>
              this.setState({swipeToClose: !this.state.swipeToClose})
            }
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 50,
    flex: 1,
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal1: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal2: {
    height: 230,
    backgroundColor: '#3B5998',
  },
  text: {
    color: 'black',
    fontSize: 22,
  },
});
