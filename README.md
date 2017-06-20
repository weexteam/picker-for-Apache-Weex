# weex-picker
weex-picker是一个weex插件，可以通过weexpack快速集成，可以丰富weex功能

* 支持的weexpack版本： >= 0.2.0
* 支持的WeexSDK版本： >= 0.14.0
* 支持的Vuev版本: 2.x

weex-picker仅支持weex的web端的picker功能，如无需picker功能，无需引入.

## Examples

- 编译例子
```
  npm run build:examples:web
```
- 启动调试服务器
```
  npm run serve
```
  打开 [localhost:12580]('localhost:12580/index.html') 查看例子.

## How to use
- Step 1
```
  npm install  weex-picker --save-dev
```
- Step 2
  
  你需要在引入`weex-vue-render`之后进行模块注册，具体可参考根目录下的`./playground/browser/plugininstall.js`

```javascript
  let picker = require('weex-picker');
  if (window.Weex) {
    Weex.install(picker);
  } else if (window.weex) {
    weex.install(picker);
  }
```
- Step 3

```javascript
  const picker = weex.requireModule('picker');
  picker.pick({
			items: [1, 2, 3, 4],
			height: "500px"
	}, function(ret) {
			var result = ret.result;
			if (result == 'success') {
				self.normalpickData = ret.data;
			}
	f})
```
# API Configuration

## pickOptions
  - confirmCallback 确定按钮点击回调函数
  - cancelCallback 取消按钮点击回调函数
  - data 数据项（例：[1,2,3,4]）
  - formateResult 结果格式化函数
  - cancelTitle 取消文本
  - confirmTitle 确认文本
  - cancelTitleColor 取消文本颜色
  - confirmTitleColor 确认文本颜色
  - height picker高度
  - textColor 文本项颜色
  - selectionColor 选中文本颜色

## pickTimeOptions

  - value 默认时间（例：12:00）

## pickDateOptions
  
  API具体可查看[Pickday Configuration](https://github.com/dbushell/Pikaday#configuration)