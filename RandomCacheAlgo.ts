import { AbstractCacheAlgo } from "./AbstractCacheAlgo";

class RandomCacheAlgo<k, v> extends AbstractCacheAlgo<string, v> {
  constructor(numOfMaxLength: number) {
    super();
    this.maxSizeOfCache = numOfMaxLength;
  }
  countSIzeOfDIctionary = 0;
  cacheDictionary = {};

  getElement(key: string) {
    return this.cacheDictionary[key];
  }

  removeElement(key: string) {
    if (this.cacheDictionary[key]) {
      delete this.cacheDictionary[key];
      this.countSIzeOfDIctionary -= 1;
      return true;
    }
    return false;
  }

  setElement(key: string, value: v) {
    if (this.cacheDictionary[key]) {
      this.removeElement(key);
      this.setElement(key, value);
      return key;
    }
    if (this.countSIzeOfDIctionary === this.maxSizeOfCache) {
      const indexToRemove = Math.floor(Math.random() * this.maxSizeOfCache);
      const keyInDictionary = Object.keys(this.cacheDictionary)[indexToRemove];
      this.removeElement(keyInDictionary);
    }
    this.cacheDictionary[key] = value;
    this.countSIzeOfDIctionary += 1;
    return undefined;
  }
}

const x = new RandomCacheAlgo(7);
x.setElement("aaa", 111);

x.setElement("bbb", 222);
x.setElement("ccc", 333);
x.setElement("ddd", 444);
x.setElement("eee", 555);
x.setElement("fff", 666);
x.setElement("ggg", 777);
// x.setElement("stam", "blabla");
x.setElement("eee", 98765);
console.log(x.cacheDictionary, x.countSIzeOfDIctionary);
