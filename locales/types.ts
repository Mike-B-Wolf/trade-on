export type Locale = "ja" | "en";

type WidenLiterals<T> = T extends string
    ? string
    : T extends number
      ? number
      : T extends readonly (infer U)[]
        ? readonly WidenLiterals<U>[]
      : T extends object
        ? { [K in keyof T]: WidenLiterals<T[K]> }
        : T;

export type Dictionary = WidenLiterals<typeof import("./ja").ja>;
