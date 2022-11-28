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