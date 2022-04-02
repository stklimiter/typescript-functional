
import {Maybe} from "../src/maybe";

describe('maybe isEmpty', () => {

    test('string should be some value', () => {
        expect(Maybe.of("test").isEmpty()).toBe(false);
    });

    test('bool should be some value', () => {
        expect(Maybe.of(false).isEmpty()).toBe(false);
    });

    test('empty should be some value', () => {
        expect(Maybe.of("").isEmpty()).toBe(false);
    });

    test('null should be empty', () => {
        expect(Maybe.of(null).isEmpty()).toBe(true);
    });

    test('undefined should be empty', () => {
        expect(Maybe.of(undefined).isEmpty()).toBe(true);
    });
});

describe('maybe orElse', () => {

    test('string should be some value', () => {
        expect(Maybe.of("test").orElse("nothing")).toBe("test");
    });

    test('bool should be some value', () => {
        expect(Maybe.of(false).orElse(true)).toBe(false);
    });

    test('empty should be some value', () => {
        expect(Maybe.of("").orElse("nothing")).toBe("");
    });

    test('null should be empty', () => {
        expect(Maybe.of(null).orElse("something")).toBe("something");
    });

    test('undefined should be empty', () => {
        expect(Maybe.of(undefined).orElse("something")).toBe("something");
    });
});


describe('maybe some', () => {
    test('string should be some value', () => {
        expect(Maybe.some("test").orElse("nothing")).toBe("test");
    });

    test('bool should be some value', () => {
        expect(Maybe.some(false).orElse(true)).toBe(false);
    });

    test('empty should be some value', () => {
        expect(Maybe.some("").orElse("nothing")).toBe("");
    });

    test('null should not be empty', () => {
        expect(Maybe.some(null).orElse("something")).toBe(null);
    });

    test('undefined not should be empty', () => {
        expect(Maybe.some(undefined).orElse("something")).toBe(undefined);
    });

    test('same values should not result in same objects', () => {
        expect(Maybe.some("test") === Maybe.some("test")).toBe(false);
    });
});

describe('maybe none', () => {

    test('none is empty', () => {
        expect(Maybe.none().isEmpty()).toBe(true);
    });

    test('two none, should always be the same', () => {
        expect(Maybe.none() === Maybe.none()).toBe(true);
    });

});