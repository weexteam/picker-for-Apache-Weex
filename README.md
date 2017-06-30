# weex-picker
weex-picker是一个weex插件，可以通过weexpack快速集成，可以丰富weex功能

* 支持的weexpack版本： >= 0.2.0
* 支持的WeexSDK版本： >= 0.14.0
* 支持的Vue版本: 2.x

weex-picker仅支持weex的web端的picker功能，如无需picker功能，无需引入.

## 示例

- 编译例子
```
  npm run build:examples
```
- 启动调试服务器
```
  npm run serve
```
  打开 [localhost:12580]('localhost:12580/index.html') 查看例子.

## 如何使用

- 步骤 1
```
  npm install  @weex-project/weex-picker --save-dev
```
- 步骤 2
  
  ~~你需要在引入`weex-vue-render`之后进行模块注册，具体可参考根目录下的`./playground/browser/plugininstall.js`~~

  目前模块的注册加入了源码中，请保证在weex环境加载之后引入

```html
  <script src="../../../node_modules/vue/dist/vue.runtime.js"></script>
  <script src="../../../node_modules/weex-vue-render/dist/index.js"></script>
  <script src="../../../node_modules/@weex-project/weex-picker/js/build/index.js"></script>
```

- 步骤 3

```javascript
  const picker = weex.requireModule('picker');
  picker.pick({
    items: [1, 2, 3, 4],
    height: "500px"
  }, function(ret) {
      var result = ret.result;
      if (result == 'success') {
        self.normalpickData = ret.data;
    }
  })
```

## 概述

以下为 picker 相关的 API，用于数据选择，日期选择，时间选择。

## API

### `pick(options, callback[options])`

调用单选 picker

#### 参数

- `options {Object}`：调用单选 picker 选项
  - `index {number}`：默认选中的选项
  - `items {array}`：picker 数据源

- `callback {function (ret)}`：执行完读取操作后的回调函数。`ret {Object}` 为 `callback` 函数的参数，有两个属性：
  - `result {string}`：结果三种类型 `success`, `cancel`, `error`
  - `data {number}`：选择的选项,仅成功确认时候存在。

### `pickDate(options, callback[options])`

调用 date picker

#### 参数

- `options {Object}`：调用 date picker 选项，更多选项可查看[Pickday Configuration](https://github.com/dbushell/Pikaday#configuration)
  - `value {string}`：必选，date picker 选中的值，date 的字符串格式为`yyyy-MM-dd`
  - `max {string}`：可选，date 的最大值
  - `min {string}`：可选，date 的最小值

- `callback {function (ret)}`：执行完读取操作后的回调函数。`ret {Object}` 为 `callback` 函数的参数，有两个属性：
  - `result {string}`：结果三种类型 `success`, `cancel`, `error`
  - `data {string}`：选择的值 date 的字符，格式为 `yyyy-MM-dd`, 仅成功确认的时候存在。

### `pickTime(options, callback[options])`

调用 time picker

#### 参数

- `options {Object}`：调用 time picker 选项
  - `value {string}`：必选，time 格式为 `HH:mm`

- `callback {function (ret)}`：执行完读取操作后的回调函数。`ret {Object}` 为 `callback` 函数的参数，有两个属性：
  - `result {string}`：结果三种类型 `success`, `cancel`, `error`
  - `data {string}`：time 格式为 `HH:mm`, 仅成功确认的时候存在。
  
  