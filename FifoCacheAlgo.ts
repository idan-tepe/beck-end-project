import { AbstractCacheAlgo } from "./AbstractCacheAlgo";

class FifoCacheAlgo<k, v> extends AbstractCacheAlgo<k, v> {
  
  constructor(numOfMaxLength: number) {
    super();
    this.maxSizeOfCache = numOfMaxLength;
  }

  cacheList: k[] = [];
  cacheDictionary= new Map<k,v>() ;

  //retuns the key's value or if the key isnt in the cacheDictionary returns undefined.
  getElement(key: k) {
    return this.cacheDictionary.get(key);
  }

  removeElement(key: k) {
    if (this.cacheDictionary.get(key)) {
      this.cacheDictionary.delete(key);
      this.cacheList = this.cacheList.filter((listKey) => listKey !== key);
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

    if (this.cacheList.length === this.maxSizeOfCache) {
      this.cacheDictionary.delete(this.cacheList.pop());
    }

    this.cacheList.unshift(key);
    this.cacheDictionary.set(key, value);

    return undefined;
  }
}

// const x = new FifoCacheAlgo(4);
// x.setElement("aaa", 111);

// x.setElement("bbb", 222);
// x.setElement("ccc", 333);
// x.setElement("ddd", 444);
// x.setElement("fff", 555);
// x.setElement("ddd", 343535);
// console.log(x.cacheDictionary, x.cacheList);
// // console.log(x.getElement("aaa"));
