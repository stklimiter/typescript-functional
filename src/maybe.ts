export interface IMaybe<K> {

    map<I>(fn: ((value: K) => I))

    bind<I>(fn: ((value: K) => IMaybe<I>))

    isEmpty(): boolean

    orElse(orElse: K): K

}

 class Some<K> implements IMaybe<K> {

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

 class None<K> implements IMaybe<K> {

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

 function none<K>(): None<K> {
    return noneInstance as None<K>
}

 function some<K>(value: K): Some<K> {
    return new Some<K>(value)
}

 function of<K>(value: K): IMaybe<K> {
    return value === null || value === undefined ? none() : some(value)
}

export const Maybe = {
    some,
    of,
    none
}