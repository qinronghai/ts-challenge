type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
// Pick 是选取目标对象的部分键做为新类型的属性
// K 是一个联合类型 union, 比如 'title' | 'completed'
// keyof操作符可以用于获取某种类型的所有键,其返回类型是联合类型
type Point = {
  x: number;
  y: number;
};

type P = keyof Point; // 'x' | 'y'

// K extends keyof T
// 1. keyof T 返回T类型中的key的联合类型
// 2. K extends 限制和约束了 K只能是返回的联合类型中的key，不能是别的

// in 用于取联合类型的值
type name = "firstName" | "lastName";
type TName = {
  [key in name]: string;
};
// [P in K]: string, 都可以全部取到K联合类型中的类型，相当于遍历了K中的key，然后把每个key的类型都设置为string
// 相当于
/* type TName = {
  firstName: string;
  lastName: string;
}; */
