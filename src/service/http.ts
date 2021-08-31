import axios from 'axios';
import { DebugManager } from 'react-native-debug-tool';
import { getData } from '../storage';

const codeMessage : {[key:string] :string } = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};


// 1. 配置项
const Http = axios.create({
    baseURL: 'http://192.168.124.16:3000',
    timeout: 3000,
});

// 2. 两个拦截器
//请求拦截处理
Http.interceptors.request.use(  async function (config) {
    // 在发送请求之前做些什么 
    // 1. 写好cookie 加密🔐一部分数据 
    // 2. 带上token
     const useInfo = await getData()
    config.headers = {...config.headers,token:useInfo.access_token }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
 
//返回拦截处理
Http.interceptors.response.use(function (response) {
    // 对响应数据做点什么 外面的一层不要了 只要data
    // 添加日志监听
    DebugManager.appendHttpLogs(response, response);
    return response.data;
}, function (error) {
  console.log(
    error.response
  );
  
    DebugManager.appendHttpLogs(error.response,error.response);
      console.log( codeMessage[error.response.status] );
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default Http