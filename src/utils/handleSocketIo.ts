import { io } from "socket.io-client";

// 1.连接
//2.发送消息
//3.接收消息
//4.心跳机制
//5.重连
// 6.断开连接
//7.订阅
//8.解除订阅
class WebSocketClient {
    socket: any;
    subscribeArr: any[];
    subscribeIds: any[];
    headers: {
        Authorization: string | null
    }
    constructor(url: string) {
        this.socket = io(url, {
            transports: ['websocket'],
            autoConnect: true,//自动连接
            reconnection: false //关闭自动重连
        });
        const token = localStorage.getItem('tokens');
        this.headers = {
            Authorization: token,
        }
        this.subscribeArr = []; // 已经订阅的url
        this.subscribeIds = []; // 订阅返回的id

    }

    //手动重连
    onsocketOpen() {
        this.socket.open(); // 手动重连
    }

    // 1.连接
    onConnected() {
        this.socket.on('connect', (cb: () => void) => {
            console.log(this.socket.id, '监听客户端连接成功-connect');
            cb();
        })

    }

    // 连接失败
// 连接错误

 onConnectError(){
    this.socket.on("connect_error", (err:any) => {
        err
        console.log("连接错误-connect_error");
    });
 }


    //2.发送消息
    onSendMessage(eventName: string) {
        this.socket.emit(eventName, () => {

        })
    }

    //3.接收消息
    onRecvMessage(eventName: string) {
        this.socket.on(eventName, () => { })
    }

    //4. 心跳机制ping
    onPing() {
        this.socket.on('ping', (data:any) => {

        })
    }
    onPong() {
        this.socket.on('pong', (data:any) => {

        })
    }

    //5.重连
    onReconnect() {
        // 重连成功
        this.socket.on("reconnect", (attemptNumber: number) => {
            // 重连尝试次数
            console.log("重连成功-reconnect", attemptNumber)
        });
    }


    //6.断开连接
    onDisconnected() {
       this.socket.onSendMessage('disconnect')
    }

    //7.订阅
    subscribe(subUrlList: any, cb: () => any) {
     for(let i=0;i<subUrlList.length;i+=1){

     }
    }

    //取消订阅
    unsubscribe(unSubscribeUrl: string) {
        this.subscribeIds.forEach(item => {
            if (item.id === unSubscribeUrl) {
                console.log(item)
            }
        })
    }



}


