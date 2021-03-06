// @flow
import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  // WebView,
  AppRegistry,
} from 'react-native';
import {WebView} from 'react-native-webview';
import createInvoke from 'react-native-webview-invoke/native';

export default class Test extends React.Component<any, any> {
  state = {
    status: '[Ready] Waiting For WebView Ready',
    value: '',
  };
  webview = React.createRef<WebView>();
  invoke = createInvoke(() => this.webview.current);
  _set = this.invoke.bind('set');
  _get = this.invoke.bind('get');
  webInitialize = () => {
    this.setState({
      status: '[Ready] Done!',
    });
  };
  webWannaGet = () => this.state.value;
  webWannaSet = (data: string) => {
    this.setState({
      status: `[Receive From Web] '${data}'`,
    });
  };
  handleChange = (value: string) => {
    this.setState({value});
  };
  handleGet = async () => {
    const info = await this._get();
    this.setState({
      status: `[Get From Web] '${info}'`,
    });
  };
  handleSet = async () => {
    this.setState({status: '[Set To Web] Sending'});
    await this._set(this.state.value);
    this.setState({status: '[Set To Web] Success'});
  };
  _onMessage = (e: any) => {
    // console.warn(e.nativeEvent.data)
    this.invoke.listener(e);
  };
  componentDidMount() {
    this.invoke
      .define('init', this.webInitialize)
      // @ts-ignore
      .define('get', this.webWannaGet)
      .define('set', this.webWannaSet);
  }
  renderWebSide() {
    return (
      <View style={styles.webviewArea}>
        <WebView
          cacheEnabled={false} // just on dev
          ref={this.webview}
          onMessage={this._onMessage}
          source={{uri: 'http://192.168.124.16:5000'}}
        />
      </View>
    );
  }
  renderRNSide() {
    return (
      <View style={styles.rnArea}>
        <Text style={styles.titleText}>React Naitve Side: </Text>
        <Text style={styles.statusText}>{this.state.status}</Text>
        <TextInput
          style={styles.input}
          placeholder="Some..."
          value={this.state.value}
          onChangeText={this.handleChange}
        />
        <View>
          <TouchableOpacity style={styles.button} onPress={this.handleSet}>
            <Text>Send To Web</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.handleGet}>
            <Text>Get From Web</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderRNSide()}
        {this.renderWebSide()}
      </View>
    );
  }
}

const styles = {
  container: {
    paddingTop: 20,
    flex: 1,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statusText: {
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'center',
  },
  input: {
    margin: 5,
    padding: 5,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  },
  rnArea: {
    flex: 1,
    borderWidth: 4,
    borderColor: '#666',
    borderStyle: 'solid',
    padding: 5,
  },
  button: {
    borderColor: '#000',
    borderWidth: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderRadius: 15,
  },
  webviewArea: {
    flex: 1,
    borderWidth: 4,
    borderColor: '#000',
    borderStyle: 'solid',
  },
};
