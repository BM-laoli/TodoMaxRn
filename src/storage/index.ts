import AsyncStorage from '@react-native-async-storage/async-storage';

// userinfo相关
//  USEINFO设置值
const storeData = async (value:any) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}

// USEINFO获取值
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}

// 判断是否是第一次实用app
// isFirst
const storeAppData = async (value:any) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_KeyApp', jsonValue)
  } catch (e) {
    // saving error
  }
}

const getAppData = async () => {
  console.log(666);
  
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_KeyApp')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
    console.log(e);
  }
}



export  { storeData, getData,storeAppData ,getAppData}