// AppStack
import Test1 from './page/Test1';
import Test2 from './page/Test2';

// TabStack
import Tab1S1 from './page/Tab1Stack/Test1';
import Tab1S2 from './page/Tab1Stack/Test2';
import Tab2S1 from './page/Tab2Stack/Test1';
import Tab2S2 from './page/Tab2Stack/Test2';

// DrawerStack
import D1Test1 from './page/Draw1Stack/Test1';
import D1Test2 from './page/Draw1Stack/Test2';
import D2T1 from './page/Draw2Stack/Test1';
import D2T2 from './page/Draw2Stack/Test2';
import { Drawer2StackScreen, DrawerStackNavigator, DrawerStackScreen, HomeStackScreen, SettingsStackScreen, TabNavigator } from '.';
import Test3 from './page/Test3';


// 模块内 构造独立完整App 可以通过 build不同的包来搞定 一部分心性能问题
const AppStack = {
  default:"TestNodules",
  initialRouteName:"Test1",
  Screen:[
    {
      name:"Test1",
      option:{headerShown: false},
      components:Test1,
    },
    {
      name:"Test2",
      option:{headerShown: true},
      components:Test2,
    },
    {
      name:"Test3",
      option:{headerShown: true},
      components:Test3,
    },
    {
      name:"DrawerStackNavigator",
      option:{headerShown: false},
      components:DrawerStackNavigator,
    }
  ]
}

// Tab需要配置项
const TabStackConfig ={
  name:"TabStackConfig",
  initialRouteName:"Home",
  Screen:[
    {
      name:"Home",
      option:{  headerShown: false},
      components:HomeStackScreen,
    },
    {
      name:"Settings",
      option:{ headerShown: false } ,
      components:SettingsStackScreen,
    },
    ]
}

const HomeStackConfig ={
  name:"HomeStackConfig",
  initialRouteName:"Tab1S1",
  Screen:[
    {
      name:"Tab1S1",
      option:{  headerShown: false},
      components:Tab1S1,
    },
    {
      name:"Tab1S2",
      option:{ headerShown: false } ,
      components:Tab1S2,
    },
    ]
}

const SettingsStackConfig ={
  name:"SettingsStackConfig",
  initialRouteName:"Tab2S1",
  Screen:[
    {
      name:"Tab2S1",
      option:{  headerShown: false},
      components:Tab2S1,
    },
    {
      name:"Tab2S2",
      option:{ headerShown: false } ,
      components:Tab2S2,
    },
    ]
}


// 抽屉的Stack 配置项
const DrawerStackCon ={
  name:"DrawerStack",
  initialRouteName:"DrawerStackScreen",
  Screen:[
    {
      name:"TabNavigator",
      option:{  headerShown: true},
      components:TabNavigator,
    },
    {
      name:"DrawerStackScreen",
      option:{ headerShown: true } ,
      components:DrawerStackScreen,
    },
    {
      name:"Drawer2StackScreen",
      option:{ headerShown: true },
      components:Drawer2StackScreen,
    },
  ]
}

const DrawerStack1Config ={
  name:"DrawerStack1Config",
  initialRouteName:"D1Test1",
  Screen:[
    {
      name:"D1Test1",
      option:{  headerShown: false},
      components:D1Test1,
    },
    {
      name:"D1Test2",
      option:{ headerShown: false },
      components:D1Test2,
    },
  ]
}

const DrawerStack2Config ={
  name:"DrawerStack2Config",
  initialRouteName:"D2T1",
  Screen:[
    {
      name:"D2T1",
      option:{  headerShown: false},
      components:D2T1,
    },
    {
      name:"D2T2",
      option:{ headerShown: false } ,
      components:D2T2,
    },
  ]
}


export {AppStack,
  TabStackConfig,HomeStackConfig,SettingsStackConfig
   ,DrawerStackCon ,DrawerStack1Config,DrawerStack2Config}