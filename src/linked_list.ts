import {IMaybe, none, some} from "./maybe";

interface INode<T> {
    next(): INode<T>
}

type Node<K> = { data: K, previous: Node<K> } | null


//Last in first out
class LinkedList<K> {

    constructor(private head: Node<K>, public length) {

    }

    static of<K>(node: Node<K>, size: number): LinkedList<K> {
        return node === null ? empty() : new LinkedList<K>(node, size)
    }

    add(item: K): LinkedList<K> {
        return LinkedList.of({data: item, previous: this.head}, this.length + 1)
    }

    pop(): [item: IMaybe<K>, list: LinkedList<K>] {
        return this.length > 0 ?
            [some(this.head.data), LinkedList.of(this.head.previous, this.length - 1)] :
            [none(), this]
    }


}


const emptyList: LinkedList<unknown> = new LinkedList<unknown>(null, 0)

function empty<K>(): LinkedList<K> {
    return emptyList as LinkedList<K>
}

function fromArray<K>(array: K[]): LinkedList<K> {
    return LinkedList.of(array
        .reduce((previous, current) => ({data: current, previous: previous}), null as Node<K>), array.length)

}

export {
    fromArray,
    empty,
    LinkedList
}
