export type Prettify<T> = { [K in keyof T]: T[K] } & {};

/**
 * Extracts arguments from a path.
 *
 * ArgumentsInPath<"/manga/{id}"> => { id: string }
 *
 * ArgumentsInPath<"/{foo}/{bar}"> => { foo: string, bar: string }
 */
export type ArgumentsInPath<T extends string> = {
  [K in ExtractArguments<T>]: string;
};

type ExtractArgument<T> = 
    T extends `{${infer A}}` ? A : never;

type ExtractArguments<T> = 
    T extends `${infer A}/${infer B}`
        ? ExtractArgument<A> | ExtractArguments<B>
        : ExtractArgument<T>;
