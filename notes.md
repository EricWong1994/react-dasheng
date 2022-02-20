一个项目实现增改查实现功能
1。数据量大，数据结构复杂
2。研发效率
3。性能
4。用户体验
5。项目的质量和稳定性


技术选型
1.框架 React
2.Typescript
3.包管理pnpm
4.组件库ant- design(自己考虑封装几个)
5.路由 react.- router
6.数据流: redux dva mob..
7.use工具库
8.构建工具 vite umi
9.css预处理器sass
10.网络请求 axios use工具库里其实也有请求的api
11.代码规范 elint prettier
.松散的配置
12.git规范分支, hooks
13.代码的自动化部署 github action(静态的部署)
14.自动化测试,日期处理,工具函数,简单可视化图标

eslint安装
npx eslint --init

? How would you like to use ESLint? … 
  To check syntax only
❯ To check syntax and find problems
  To check syntax, find problems, and enforce code style

  ? What type of modules does your project use? … 
❯ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these


Warning: React version not specified in eslint-plugin-react settings. See https://github.com/yannickcr/eslint-plugin-react#configuration .
Successfully created .eslintrc.js file in /Users/wangshihao/Desktop/github/react-dasheng
ESLint was installed locally. We recommend using this local copy instead of your globally-installed copy.

# 04 
emojiall
https://www.emojiall.com/zh-hans
# 08 节

husky 安装

# 09
type: message
type(module): message perf(reactvity): addxx
refactor:代码重写不影响功能 chore:不知道是啥,就写这个 feat:新功能
f1X:改bug
docs:文档
perf:性能
test:测试
style:样式 ci:打包集成相关 build:部署
wip:写了ー半没完成 re Lease:发版 deps:依赖更改

正则可视化
https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24