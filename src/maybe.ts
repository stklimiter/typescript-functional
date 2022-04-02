export interface IMaybe<K> {

    map<I>(fn: ((value: K) => I))

    bind<I>(fn: ((value: K) => IMaybe<I>))

    isEmpty(): boolean

    orElse(orElse: K): K

}

export class Some<K> implements IMaybe<K> {

    public constructor(private value: K) {
    }

    orElse(_: K): K {
        return this.value
    }

    map<I>(fn: (value: K) => NonNullable<I>): IMaybe<I> {
        return of(fn(this.value))
    }

    bind<I>(fn: (value: K) => IMaybe<I>) {
        return fn(this.value)
    }

    isEmpty(): boolean {
        return false;
    }

}

export class None<K> implements IMaybe<K> {

    map<I>(fn: (value: K) => I) {
        return this
    }

    bind<I>(fn: (value: K) => IMaybe<I>) {
        return this
    }

    isEmpty(): boolean {
        return true;
    }

    orElse(orElse: K): K {
        return orElse;
    }

}

const noneInstance = new None<unknown>()

export function none<K>(): None<K> {
    return noneInstance as None<K>
}

export function some<K>(value: K): Some<K> {
    return new Some<K>(value)
}

export function of<K>(value: K): IMaybe<K> {
    return value === null || value === undefined ? none() : some(value)
}

