import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {ModuleTest} from './src/modules';

// 设置多入口 优化性能
AppRegistry.registerComponent(appName, () => ModuleTest);

// 目前有待研究和实现
// AppRegistry.registerComponent('appName2', () => ModuleTest2);
// yarn start --reset-cache
