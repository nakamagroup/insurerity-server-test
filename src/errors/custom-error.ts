type MaybeUndefined<T> = T | undefined;

export default abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }
    abstract serializeErrors(): { message: string; field?: string }[];

    abstract serializeErrors(): {
        message: string;
        field?: MaybeUndefined<string>;
        name?: MaybeUndefined<string>;
        params?: MaybeUndefined<object>;
    }[];
}
