import { AbstractCacheAlgo } from "./AbstractCacheAlgo";

class FifoCacheAlgo<k, v> extends AbstractCacheAlgo<string, v> {
  constructor(numOfMaxLength: number) {
    super();
    this.maxSizeOfCache = numOfMaxLength;
  }

  cacheList: string[] = [];
  cacheDictionary = {};

  //retuns the key's value or if the key isnt in the cacheDictionary returns undefined.
  getElement(key: string) {
    return this.cacheDictionary[key];
  }

  removeElement(key: string) {
    if (this.cacheDictionary[key]) {
      delete this.cacheDictionary[key];
      this.cacheList = this.cacheList.filter((listKey) => listKey !== key);
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
    if (this.cacheList.length === this.maxSizeOfCache) {
      delete this.cacheDictionary[this.cacheList.pop()];
    }
    this.cacheList.unshift(key);
    this.cacheDictionary[key] = value;

    return undefined;
  }
}

const x = new FifoCacheAlgo(4);
x.setElement("aaa", 111);

x.setElement("bbb", 222);
x.setElement("ccc", 333);
x.setElement("ddd", 444);
x.setElement("fff", 555);
x.setElement("ddd", 343535);
console.log(x.cacheDictionary, x.cacheList);
// console.log(x.getElement("aaa"));
