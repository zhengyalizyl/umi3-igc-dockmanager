/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
 import { extend } from 'umi-request'
 import {message} from 'antd'

 
 const codeMessage = {
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
   504: '网关超时。'
 }
 type mapCode =
  | 200
  | 201
  | 202
  | 204
  | 400
  | 401
  | 403
  | 404
  | 406
  | 410
  | 422
  | 500
  | 502
  | 503
  | 504;

 /**
  * 异常处理程序
  */
 const errorHandler = (error:any) => {
   const { response,data } = error
   if (response && response.status) {
     const errorText = codeMessage[response.status as mapCode ] || response.statusText
     const { status, url } = response
 
    if(status===401){
        message.error(`${data.message}`);
    }else if(status===403){
        message.error(`${data.message}`);
    }
   }
    else if (!response) {
     message.error('您的网络发生异常，无法连接服务器' )
   }else {
    message.error('未知错误, 请联系网站开发人员处理');
   }
   return error
 }
 
 /**
  * 配置request请求时的默认参数
  */
 const client = extend({
   errorHandler, // 默认错误处理
   prefix:'/api',//前缀
   timeout: 600000//过期时间
 })
 // request拦截器, 改变url 或 options
 client.interceptors.request.use((url:any, options:any) => {
    let headers:any={
        'Content-Type':'application/json;charset=UTF-8',
        Accept:'application/json',
    }
    const token = localStorage.getItem('tokens');
    if(token){
        headers={
            ...headers,
            Authorization: token,
        }
    }
    const developmentSocketUrl = `ws://192.168.0.1:8090/api/websocket'`;
    const isHttps = document.location.protocol === 'https:';
    const socketPrefix = isHttps ? 'wss' : 'ws';
    const productionSocketUrl = `${socketPrefix}://${window.location.host}/api/websocket`;
    if(process.env.UMI_ENV==='dev'){
        (window as any).socketUrl=developmentSocketUrl;
        (window as any).BaseUrl='';
        (window as any).BaseHost=`http://192.168.0.1:8090`
    }else if(process.env.UMI_ENV==='pro'){
        (window as any).socketUrl=productionSocketUrl;
        (window as any).BaseUrl='';
        (window as any).BaseHost=`${document.location.protocol}//${window.location.host}`;
    }else if(process.env.UMI_ENV==='es'){
        (window as any).socketUrl= `${socketPrefix}://${window.location.host}/es/**`;
        (window as any).BaseUrl='/es';
        (window as any).BaseHost='/es';
    }

   return {
     url:(window as any).BaseUrl+url,
     options: { ...options, headers }
   }
 }, { global: true })
 
 // 克隆响应对象做解析处理
 client.interceptors.response.use(async (response:any,options) => {
   try {
     const data = await response.clone().json();
    //  console.log(data)
   } catch (error) {
    console.dir(error)
   }
   return response
 })
 
 export default client