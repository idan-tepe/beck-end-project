export interface ICacheAlgo<k, v> {
  getElement(k: k): v | undefined;
  setElement(k: k, v: v): k | undefined;
  removeElement(k: k): boolean;
}
