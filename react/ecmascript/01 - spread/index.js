import { isArray } from './utils';

export function min(...array) {
  if(!isArray(array))
    return array;
  
  if(array.length > 0)
    return Math.min(...array);
  return undefined;
}

export function copy() {

}

export function reverseMerge() {
  return [...arr2, ...arr1];
}

export function filterAttribs({a, b, ...c}) {
  return { ...c};
}
