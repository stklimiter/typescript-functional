import {LinkedList} from "../src/linked_list";
import {Maybe} from "../src/maybe";

describe('linkedList empty', () => {

    test('empty list are all the same object', () => {
        expect(LinkedList.empty() === LinkedList.empty()).toBe(true)
    })

    test('empty list pop returns empty optional', () => {
        let [head, _] = LinkedList.empty().popLast()
        expect(head).toBe(Maybe.none())
    });

    test('empty list pop returns empty list', () => {
        let [_, list] = LinkedList.empty().popLast()
        expect(list).toBe(LinkedList.empty())
    });

    test('empty list pop returns same list', () => {
        let [_, list] = LinkedList.empty().popLast()
        expect(list === LinkedList.empty()).toBe(true)
    });
});

describe('linkedList fromArray', () => {

    test('from empty array returns an empty LinkedList', () => {
        expect(LinkedList.fromArray([])).toBe(LinkedList.empty())
    })

    test('array with 1 item, creates an LL with 1 item', () => {
        let linkedList = LinkedList.fromArray([1])
        expect(linkedList.length).toBe(1)
    })

    test('array with 6 items, creates an LL with 6 items', () => {
        let linkedList = LinkedList.fromArray([1, 2, 3, 4, 5, 6])
        expect(linkedList.length).toBe(6)
    })

    test('array with one item, creates the same item as the linked list', () => {
        let linkedList = LinkedList.fromArray([1234])
        let [item, linkedList_2] = linkedList.popLast()
        expect(item.isEmpty()).toBe(false)
        expect(item.orElse(0)).toBe(1234)
    })

    test('array contains a reversed linked list', () => {
        let linkedList = LinkedList.fromArray([1, 2, 3, 4])

        expect(linkedList.length).toBe(4)

        let [item_1, linkedList_1] = linkedList.popLast()
        expect(item_1.isEmpty()).toBe(false)
        expect(item_1.orElse(0)).toBe(4)
        expect(linkedList_1.length).toBe(3)

        let [item_2, linkedList_2] = linkedList_1.popLast()
        expect(item_2.isEmpty()).toBe(false)
        expect(item_2.orElse(0)).toBe(3)
        expect(linkedList_2.length).toBe(2)

        let [item_3, linkedList_3] = linkedList_2.popLast()
        expect(item_3.isEmpty()).toBe(false)
        expect(item_3.orElse(0)).toBe(2)
        expect(linkedList_3.length).toBe(1)

        let [item_4, linkedList_4] = linkedList_3.popLast()
        expect(item_4.isEmpty()).toBe(false)
        expect(item_4.orElse(0)).toBe(1)
        expect(linkedList_4.length).toBe(0)

        let [item_5, linkedList_5] = linkedList_4.popLast()
        expect(item_5.isEmpty()).toBe(true)
        expect(linkedList_5.length).toBe(0)
    })
});

describe('linkedList pop', () => {
    test('linked list of 4, test immutability', () => {
        let linkedList = LinkedList.fromArray([1, 2, 3, 4])

        expect(linkedList.length).toBe(4)

        let [item_1, linkedList_1] = linkedList.popLast()
        expect(item_1.isEmpty()).toBe(false)
        expect(item_1.orElse(0)).toBe(4)
        expect(linkedList.length).toBe(4)
        expect(linkedList_1.length).toBe(3)

        let [item_2, linkedList_2] = linkedList_1.popLast()
        expect(item_2.isEmpty()).toBe(false)
        expect(item_2.orElse(0)).toBe(3)
        expect(linkedList.length).toBe(4)
        expect(linkedList_1.length).toBe(3)
        expect(linkedList_2.length).toBe(2)

        let [item_3, linkedList_3] = linkedList_2.popLast()
        expect(item_3.isEmpty()).toBe(false)
        expect(item_3.orElse(0)).toBe(2)
        expect(linkedList.length).toBe(4)
        expect(linkedList_1.length).toBe(3)
        expect(linkedList_2.length).toBe(2)
        expect(linkedList_3.length).toBe(1)

        let [item_4, linkedList_4] = linkedList_3.popLast()
        expect(item_4.isEmpty()).toBe(false)
        expect(item_4.orElse(0)).toBe(1)
        expect(linkedList.length).toBe(4)
        expect(linkedList_1.length).toBe(3)
        expect(linkedList_2.length).toBe(2)
        expect(linkedList_3.length).toBe(1)
        expect(linkedList_4.length).toBe(0)

        let [item_5, linkedList_5] = linkedList_4.popLast()
        expect(item_5.isEmpty()).toBe(true)
        expect(linkedList.length).toBe(4)
        expect(linkedList_1.length).toBe(3)
        expect(linkedList_2.length).toBe(2)
        expect(linkedList_3.length).toBe(1)
        expect(linkedList_4.length).toBe(0)
        expect(linkedList_5.length).toBe(0)
    })
})

describe('linkedList add', () => {
    test('empty linked list, add one item twice', () => {
        let linkedList = LinkedList.empty()
        expect(linkedList.length).toBe(0)

        let linkedList_1 = linkedList.addLast(2)
        expect(linkedList.length).toBe(0)
        expect(linkedList_1.length).toBe(1)

        let linkedList_2 = linkedList.addLast(3)
        expect(linkedList.length).toBe(0)
        expect(linkedList_1.length).toBe(1)
        expect(linkedList_2.length).toBe(2)
    })

    test('empty linked list, add one item twice and validate', () => {
        let linkedList = LinkedList.empty()
        expect(linkedList.length).toBe(0)

        let linkedList_1 = linkedList.addLast(2)
        expect(linkedList.length).toBe(0)
        expect(linkedList_1.length).toBe(1)

        let linkedList_2 = linkedList.addLast(3)
        expect(linkedList.length).toBe(0)
        expect(linkedList_1.length).toBe(1)
        expect(linkedList_2.length).toBe(2)

        let [var3, linkedList_3] = linkedList_2.popLast()
        let [var4, linkedList_4] = linkedList_3.popLast()
        let [var5, linkedList_5] = linkedList_4.popLast()

        expect(var3.isEmpty()).toBe(false)
        expect(var3.orElse(99)).toBe(3)

        expect(var4.isEmpty()).toBe(false)
        expect(var4.orElse(99)).toBe(2)

        expect(var4.isEmpty()).toBe(true)
        expect(var4.orElse(99)).toBe(99)

    })
})
