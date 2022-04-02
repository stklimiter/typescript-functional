import {none, of, some} from "../src/maybe";


describe('maybe isEmpty', () => {

    test('string should be some value', () => {
        expect(of("test").isEmpty()).toBe(false);
    });

    test('bool should be some value', () => {
        expect(of(false).isEmpty()).toBe(false);
    });

    test('empty should be some value', () => {
        expect(of("").isEmpty()).toBe(false);
    });

    test('null should be empty', () => {
        expect(of(null).isEmpty()).toBe(true);
    });

    test('undefined should be empty', () => {
        expect(of(undefined).isEmpty()).toBe(true);
    });
});

describe('maybe orElse', () => {

    test('string should be some value', () => {
        expect(of("test").orElse("nothing")).toBe("test");
    });

    test('bool should be some value', () => {
        expect(of(false).orElse(true)).toBe(false);
    });

    test('empty should be some value', () => {
        expect(of("").orElse("nothing")).toBe("");
    });

    test('null should be empty', () => {
        expect(of(null).orElse("something")).toBe("something");
    });

    test('undefined should be empty', () => {
        expect(of(undefined).orElse("something")).toBe("something");
    });
});


describe('maybe some', () => {
    test('string should be some value', () => {
        expect(some("test").orElse("nothing")).toBe("test");
    });

    test('bool should be some value', () => {
        expect(some(false).orElse(true)).toBe(false);
    });

    test('empty should be some value', () => {
        expect(some("").orElse("nothing")).toBe("");
    });

    test('null should not be empty', () => {
        expect(some(null).orElse("something")).toBe(null);
    });

    test('undefined not should be empty', () => {
        expect(some(undefined).orElse("something")).toBe(undefined);
    });

    test('same values should not result in same objects', () => {
        expect(some("test") === some("test")).toBe(false);
    });
});

describe('maybe none', () => {

    test('none is empty', () => {
        expect(none().isEmpty()).toBe(true);
    });

    test('two none, should always be the same', () => {
        expect(none() === none()).toBe(true);
    });

});