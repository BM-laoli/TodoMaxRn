# 一、集成 Jest

> 主要是用 指标和技术手段，来回答：“你写的代码到底有没有问题”的一种方式，这里写单元测试 主要以 “快照” ”浅层渲染“ ， ”异步测试为主“，”事件“，最终产出报告，用来衡量你的这次测试质量。当然如果你手头上有具体的测试用例，那么你应该参考它来编写你的单元测试, 这里有一个 模拟 Native 环境的参考文档 <https://www.jianshu.com/p/d5913ae3bd5c> 有问题可以去寻求解决方案 github 地址：<https://github.com/ferrannp/react-native-testing-example/blob/master/package.json>

# 二、单测流程

> 每一次往 主干功能/版本 上合并代码时 都要求有报告 并且做相关的记录

- 拿到测试用例
- 编写测试代码
- 进行测试 得到测试报告 做一次记录 📝

# 三、详细说明

## 1. Jest 基础语法和 APi

### 全局 globals

- describe(name, fn)：描述块，讲一组功能相关的测试用例组合在一起 （注意每一个都描述快都可以使用四个周期 hook）
- it(name, fn, timeout)：别名 test，用来放测试用例
- afterAll(fn, timeout)：所有测试用例跑完以后执行的方法
- beforeAll(fn, timeout)：所有测试用例执行之前执行的方法
- afterEach(fn)：在每个测试用例执行完后执行的方法
- beforeEach(fn)：在每个测试用例执行之前需要执行的方法

### Jest 对象

- jest.fn(implementation)：返回一个全新没有使用过的 mock function，这个- function 在被调用的时候会记录很多和函数调用有关的信息
- jest.mock(moduleName, factory, options)：用来 mock 一些模块或者文件
- jest.spyOn(object, methodName)：返回一个 mock function，和 jest.fn 相似，但是- 能够追踪 object[methodName]的调用信息，类似 Sinon

### Mock Function 这很重要

使用 mock 函数可以轻松的模拟代码之间的依赖，可以通过 fn 或 spyOn 来 mock 某个具体的函数；通过 mock 来模拟某个模块。

### 快照

所谓快照就是 ，渲染出来的一个 UI 结构，我们拿他去对比一下 和我们预期结果一直就通过

### 异步测试

Jest 支持对异步的测试，支持 Promise 和 Async/Await 两种方式的异步测试。

### 常见断言

- expect(value)：要测试一个值进行断言的时候，要使用 expect 对值进行包裹
- toBe(value)：使用 Object.is 来进行比较，如果进行浮点数的比较，要使用 toBeCloseTo
- not：用来取反
- toEqual(value)：用于对象的深比较
- toMatch(regexpOrString)：用来检查字符串是否匹配，可以是正则表达式或者字符串
- toContain(item)：用来判断 item 是否在一个数组中，也可以用于字符串的判断
- toBeNull(value)：只匹配 null
- toBeUndefined(value)：只匹配 undefined
- toBeDefined(value)：与 toBeUndefined 相反
- toBeTruthy(value)：匹配任何使 if 语句为真的值
- toBeFalsy(value)：匹配任何使 if 语句为假的值
- toBeGreaterThan(number)： 大于
- toBeGreaterThanOrEqual(number)：大于等于
- toBeLessThan(number)：小于
- toBeLessThanOrEqual(number)：小于等于
- toBeInstanceOf(class)：判断是不是 class 的实例
- anything(value)：匹配除了 null 和 undefined 以外的所有值
- resolves：用来取出 promise 为 fulfilled 时包裹的值，支持链式调用
- rejects：用来取出 promise 为 rejected 时包裹的值，支持链式调用
- toHaveBeenCalled()：用来判断 mock function 是否被调用过
- toHaveBeenCalledTimes(number)：用来判断 mock function 被调用的次数
- assertions(number)：验证在一个测试用例中有 number 个断言被调用
- extend(matchers)：自定义一些断言

## 2. 编写测试用例 （示例代码）

- 要被测试的组件

```jsx
// Intro.tsx
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Intro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>
          This is a React Native snapshot test.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

export default Intro;
```

- **tests**/Intro-test.tsx 测试文件

```jsx
// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../Intro';

test('renders correctly', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

- 执行 测试

```shell
yarn run test --coverage
```

## 3. 度量你的测试结果

- 行覆盖率(line coverage)：是否测试用例的每一行都执行了
- 函数覆盖率(function coverage)：是否测试用例的每一个函数都调用了
- 分支覆盖率(branch coverage)：是否测试用例的每个 if 代码块都执行了
- 语句覆盖率(statement coverage)：是否测试用例的每个语句都执行了
- 出最终的测试报告 加一个参数 --coverage

设置一个全局配置阈值 ，为了简便起见，统一使用全局配置 packge.json 中

```json
....
"jest": {
    "preset": "react-native",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "coverageThreshold":{
        "global": {
          "branches": 50,
          "functions": 50,
          "lines": 50,
          "statements": 50
      }
    }
  }
```

## 4.能做得更多

> 待补充
