## Weixin mini app demo
```text
./assets/
./components/
./configs/
./models/
./pages/
./services/
./utils/
```

## interface & type
```ts
export interface User1 {
  userId: String,
  age: Number
  createTime: Date
}

export type User2 = {
  userId: String,
  age: Number
  createTime: Date
}
```

## typescript as
```ts
const tx = {} as Transaction;
const tx: Transaction = {
  // properties
};
```

## Docs

#### package
https://github.com/Tencent/tdesign-miniprogram  
https://www.npmjs.com/package/dayjs  
https://www.npmjs.com/package/lodash  

#### weixin document
https://developers.weixin.qq.com/miniprogram/dev/framework  

#### typescritp handbook
https://www.typescriptlang.org/docs/handbook/intro.html  
https://www.tslang.cn/docs/handbook/basic-types.html  
https://typescript.bootcss.com  