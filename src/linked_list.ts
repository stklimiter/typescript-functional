import {IMaybe, Maybe} from "./maybe";

interface INode<T> {
    next(): INode<T>
}

type Node<K> = { data: K, previous: Node<K> } | null

interface IList<K, L extends IList<K, L>> {
    addLast(item: K): L
    last(): IMaybe<K>
    popLast(): [IMaybe<K>, L]
}

//Last in first out
class SinglyLinkedList<K> implements IList<K, SinglyLinkedList<K>> {

    constructor(private _head: Node<K>, public length) {

    }

    static of<K>(node: Node<K>, size: number): SinglyLinkedList<K> {
        return node === null ? empty() : new SinglyLinkedList<K>(node, size)
    }

    addLast(item: K): SinglyLinkedList<K> {
        return SinglyLinkedList.of({data: item, previous: this._head}, this.length + 1)
    }

    last(): IMaybe<K> {
        return Maybe.of(this._head.data)
    }

    popLast(): [item: IMaybe<K>, list: SinglyLinkedList<K>] {
        return this.length > 0 ?
            [Maybe.some(this._head.data), SinglyLinkedList.of(this._head.previous, this.length - 1)] :
            [Maybe.none(), this]
    }


}


const emptyList: SinglyLinkedList<unknown> = new SinglyLinkedList<unknown>(null, 0)

function empty<K>(): SinglyLinkedList<K> {
    return emptyList as SinglyLinkedList<K>
}

function fromArray<K>(array: K[]): SinglyLinkedList<K> {
    return SinglyLinkedList.of(array
        .reduce((previous, current) => ({data: current, previous: previous}), null as Node<K>), array.length)

}

export const LinkedList = {
    fromArray,
    empty
}

