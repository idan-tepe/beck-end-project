export class ListNode {
  data: unknown;
  next: ListNode | null;
  prev: ListNode | null;
  constructor(data: unknown) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
  setNext(node: ListNode) {
    this.next = node;
  }
  setPrev(node: ListNode) {
    this.prev = node;
  }
}

export class DoubleLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  NodeCounter: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.NodeCounter = 0;
  }
  getHead() {
    return this.head;
  }
  setHead(node: ListNode) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.setNext(this.head);
      this.head.setPrev(node);
      this.head = node;
    }
    this.NodeCounter += 1;
  }
  getTail() {
    return this.tail;
  }
  removeNode(node: ListNode) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode === node) {
        //find the equal node
        if (this.NodeCounter === 1) {
          //if only on node
          this.head = null;
          this.tail = null;
        } else if (this.NodeCounter === 2) {
          //if there is 2 elements in the LL
          if (this.head === node) {
            this.head = this.head.next;
            this.tail.prev = null;
          } else {
            this.tail = this.tail.prev;
            this.head.next = null;
          }
        } else {
          if (this.head === node) {
            this.head = this.head.next;
            this.head.prev = null;
          } else if (this.tail === node) {
            this.tail = this.tail.prev;
            this.tail.next = null;
          } else {
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
          }
        }
        this.NodeCounter -= 1;
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

// let n1 = new ListNode("aaa");
// let n2 = new ListNode("bbb");
// let n3 = new ListNode("ccc");
// let n4 = new ListNode("ddd");
// let n5 = new ListNode("eee");
// let n6 = new ListNode("fff");

// let DBLL = new DoubleLinkedList();
// DBLL.setHead(n1);

// DBLL.setHead(n2);
// DBLL.setHead(n3);
// DBLL.setHead(n4);
// console.log(DBLL);
// console.log(DBLL.removeNode(n2));
// // console.log(DBLL);
// // DBLL.setHead(n3);
// // DBLL.setHead(n4);
// // DBLL.setHead(n5);
// // DBLL.setHead(n6);
// let current = DBLL.head;
// while (current) {
//   console.log(
//     `prev: ${current.prev?.data}  data: ${current.data} next: ${current.next?.data} `
//   );
//   current = current.next;
// }
// // DBLL.removeNode(n1);

// // while (current) {
// //   console.log(
// //     `prev: ${current.prev?.data}  data: ${current.data} next: ${current.next?.data} `
// //   );
// //   current = current.next;
// // }
