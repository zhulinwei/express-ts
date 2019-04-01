# experss-ts-demo

使用express与typescript的demo项目

## 安装依赖
npm install

## 目录结构
bin             --启动配置
dist            --编译文件
src
  dao.ts        --dao层
  modle.ts      --model层
  service.ts    --服务层
  controller.ts --控制层
  router.ts     --路由层
  middle.ts     --中间件
  config.ts     --配置文件
  interface.ts  --接口文件
test            --测试文件
app.ts          --app文件
server.ts       --启动文件
tsconfig.json   --ts配置文件

## 启动

### 直接启动
注意安装ts-node
```npm
npm i ts-node typescipt -g
```
ts-node server.ts 

### pm2启动
tsc -w
pm2 start bin/pm2.json

## 注意
仅供学习，误用于生产环境（因为错误异常没有认真处理哈哈）
