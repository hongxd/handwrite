interface A {
  a: number;
  b: boolean;
  c: string;
  d: Symbol;
}


type d = Pick<A, "a" | "b" | "d">;
export type Pick<T, K extends keyof T> = {
  [key in K]: T[key]
}
