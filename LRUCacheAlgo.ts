import { AbstractCacheAlgo } from "./AbstractCacheAlgo";
import { ListNode, DoubleLinkedList } from "./DoubleLinkedList";

class LRUCacheAlgo<k, v> extends AbstractCacheAlgo<k, v> {
  constructor(numOfMaxLength: number) {
    super();
    this.maxSizeOfCache = numOfMaxLength;
  }

  hashMap = new Map<k,ListNode<k,v>>();
  LinkedList = new DoubleLinkedList();

  getElement(key: k) {
    const someNode = this.hashMap.get(key);

    if (someNode) {
      this.removeElement(key);
      this.setElement(key, someNode.data.get(key));
      return someNode.data.get(key);
    }
    return undefined;
  }

  removeElement(key: k) {
    if (this.hashMap.get(key)) {
      this.LinkedList.removeNode(this.hashMap.get(key));
      this.hashMap.delete(key);
      return true;
    }
    return false;
  }

  setElement(key: k, value: v) {
    if (this.hashMap.get(key)) {
      this.removeElement(key);
      this.setElement(key, value);
      return key;
    }
    if (this.LinkedList.NodeCounter === this.maxSizeOfCache) {
      this.LinkedList.removeNode(this.LinkedList.getTail());
      this.hashMap.delete(key);
    }
    let newMap = new Map<k,v>()
    newMap.set(key,value)
    let newNode = new ListNode<k,v>(newMap);
    this.LinkedList.setHead(newNode);
    this.hashMap.set(key, newNode);
    return undefined;
  }
}

const x = new LRUCacheAlgo(7);
x.setElement("aaa", 111);

x.setElement("bbb", 222);

x.setElement("ccc", 333);
x.setElement("ddd", 444);
x.setElement("eee", 555);
x.setElement("fff", 666);
x.setElement("ggg", 777);
x.getElement("aaa");
x.setElement("eee", 123456789);

console.log(x.LinkedList);
console.log(
  `____________________________________________________________________________`
);
console.log(x.hashMap);
