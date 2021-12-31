## 参考资料

#### https://github.com/hellcat666/esp32_camera_mjpeg_multiclient

#### https://github.com/Inglebard/esp32cam-relay

#### http://element-ui.cn/vuejs/show-18130.aspx

## 注意

cam32websocket 为esp32cam上面的websocket发送mjpeg流的代码

esp32_camera_mjpeg_multiclient 为内网直连小程序看视频流的代码

vue 为在网页上看websocket发过来的视频流代码

websocketserver.py 为python做的websocket服务器，还有Bug，还没做好客户端管理。请自行解决。

## 缺陷

不能传太大分部率的视频，因为没有做分包，要换摄像头做高清的话，要做分包，jpeg都是以ff d8开始 ff d9结束。所以，你们看着办。加油。
