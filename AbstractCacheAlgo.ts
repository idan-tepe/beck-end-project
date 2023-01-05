import { ICacheAlgo } from "./ICacheAlgo";
export abstract class AbstractCacheAlgo<k, v> implements ICacheAlgo<k, v> {
  maxSizeOfCache: number;

  getElement(k: k): v | undefined {
    return;
  }

  setElement(k: k, v: v) {
    return undefined;
  }

  removeElement(k: k) {
    return true;
  }
}
