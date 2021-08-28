import Test1 from "../TestModule2/page/Tab1Stack/Test1"
import Test2 from "../TestModule2/page/Tab1Stack/Test1"

const HomeStackConfig ={
  name:"HomeStackConfig",
  initialRouteName:"Tab1S1",
  Screen:[
    {
      name:"Tab1S1",
      option:{  headerShown: false},
      components:Test1,
    },
    {
      name:"Tab1S2",
      option:{ headerShown: false } ,
      components:Test2,
    },
    ]
}

export  {HomeStackConfig}