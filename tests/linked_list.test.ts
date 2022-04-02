import {none} from "../src/maybe";
import {empty, fromArray} from "../src/linked_list";

describe('linkedList empty', () => {

    test('empty list are all the same object', () => {
        expect(empty() === empty()).toBe(true)
    })

    test('empty list pop returns empty optional', () => {
        let [head, _] = empty().pop()
        expect(head).toBe(none())
    });

    test('empty list pop returns empty list', () => {
        let [_, list] = empty().pop()
        expect(list).toBe(empty())
    });

    test('empty list pop returns same list', () => {
        let [_, list] = empty().pop()
        expect(list === empty()).toBe(true)
    });
});

describe('linkedList fromArray', () => {

    test('from empty array returns an empty LinkedList', () => {
        expect(fromArray([])).toBe(empty())
    })

    test('array with 1 item, creates an LL with 1 item', () => {
        let linkedList = fromArray([1])
        expect(linkedList.length).toBe(1)
    })

    test('array with 6 items, creates an LL with 6 items', () => {
        let linkedList = fromArray([1, 2, 3, 4, 5, 6])
        expect(linkedList.length).toBe(6)
    })

    test('array with one item, creates the same item as the linked list', () => {
        let linkedList = fromArray([1234])
        let [item, linkedList_2] = linkedList.pop()
        expect(item.isEmpty()).toBe(false)
        expect(item.orElse(0)).toBe(1234)
    })

    test('array contains a reversed linked list', () => {
        let linkedList = fromArray([1, 2, 3, 4])

        expect(linkedList.length).toBe(4)

        let [item_1, linkedList_1] = linkedList.pop()
        expect(item_1.isEmpty()).toBe(false)
        expect(item_1.orElse(0)).toBe(4)
        expect(linkedList_1.length).toBe(3)

        let [item_2, linkedList_2] = linkedList_1.pop()
        expect(item_2.isEmpty()).toBe(false)
        expect(item_2.orElse(0)).toBe(3)
        expect(linkedList_2.length).toBe(2)

        let [item_3, linkedList_3] = linkedList_2.pop()
        expect(item_3.isEmpty()).toBe(false)
        expect(item_3.orElse(0)).toBe(2)
        expect(linkedList_3.length).toBe(1)

        let [item_4, linkedList_4] = linkedList_3.pop()
        expect(item_4.isEmpty()).toBe(false)
        expect(item_4.orElse(0)).toBe(1)
        expect(linkedList_4.length).toBe(0)

        let [item_5, linkedList_5] = linkedList_4.pop()
        expect(item_5.isEmpty()).toBe(true)
        expect(linkedList_5.length).toBe(0)
    })
});

describe('linkedList pop', () => {


    test('linked list of 4, test immutability', () => {
        let linkedList = fromArray([1, 2, 3, 4])

        expect(linkedList.length).toBe(4)

        let [item_1, linkedList_1] = linkedList.pop()
        expect(item_1.isEmpty()).toBe(false)
        expect(item_1.orElse(0)).toBe(4)
        expect(linkedList.length).toBe(4)
        expect(linkedList_1.length).toBe(3)

        let [item_2, linkedList_2] = linkedList_1.pop()
        expect(item_2.isEmpty()).toBe(false)
        expect(item_2.orElse(0)).toBe(3)
        expect(linkedList.length).toBe(4)
        expect(linkedList_1.length).toBe(3)
        expect(linkedList_2.length).toBe(2)

        let [item_3, linkedList_3] = linkedList_2.pop()
        expect(item_3.isEmpty()).toBe(false)
        expect(item_3.orElse(0)).toBe(2)
        expect(linkedList.length).toBe(4)
        expect(linkedList_1.length).toBe(3)
        expect(linkedList_2.length).toBe(2)
        expect(linkedList_3.length).toBe(1)

        let [item_4, linkedList_4] = linkedList_3.pop()
        expect(item_4.isEmpty()).toBe(false)
        expect(item_4.orElse(0)).toBe(1)
        expect(linkedList.length).toBe(4)
        expect(linkedList_1.length).toBe(3)
        expect(linkedList_2.length).toBe(2)
        expect(linkedList_3.length).toBe(1)
        expect(linkedList_4.length).toBe(0)

        let [item_5, linkedList_5] = linkedList_4.pop()
        expect(item_5.isEmpty()).toBe(true)
        expect(linkedList.length).toBe(4)
        expect(linkedList_1.length).toBe(3)
        expect(linkedList_2.length).toBe(2)
        expect(linkedList_3.length).toBe(1)
        expect(linkedList_4.length).toBe(0)
        expect(linkedList_5.length).toBe(0)
    })
})
