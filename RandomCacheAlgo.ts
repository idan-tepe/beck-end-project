import { AbstractCacheAlgo } from "./AbstractCacheAlgo";

class RandomCacheAlgo<k, v> extends AbstractCacheAlgo<k, v> {
  
  constructor(numOfMaxLength: number) {
    super();
    this.maxSizeOfCache = numOfMaxLength;
  }
  countSIzeOfDIctionary = 0;
  cacheDictionary = new Map<k,v>() ;

  getElement(key: k) {
    return this.cacheDictionary.get(key);
  }

  removeElement(key: k) {
    if (this.cacheDictionary.get(key)) {
      this.cacheDictionary.delete(key);
      this.countSIzeOfDIctionary -= 1;
      return true;
    }
    return false;
  }

  setElement(key: k, value: v) {
    if (this.cacheDictionary.get(key)) {
      this.removeElement(key);
      this.setElement(key, value);
      return key;
    }

    if (this.countSIzeOfDIctionary === this.maxSizeOfCache) {
      const indexToRemove = Math.floor(Math.random() * this.maxSizeOfCache);
      const keyInDictionary = this.cacheDictionary.keys()[indexToRemove];
      this.removeElement(keyInDictionary);
    }

    this.cacheDictionary.set(key,value);
    this.countSIzeOfDIctionary += 1;
    return undefined;
  }
}

// const x = new RandomCacheAlgo(7);
// x.setElement("aaa", 111);

// x.setElement("bbb", 222);
// x.setElement("ccc", 333);
// x.setElement("ddd", 444);
// x.setElement("eee", 555);
// x.setElement("fff", 666);
// x.setElement("ggg", 777);
// // x.setElement("stam", "blabla");
// x.setElement("eee", 98765);
// console.log(x.cacheDictionary, x.countSIzeOfDIctionary);
