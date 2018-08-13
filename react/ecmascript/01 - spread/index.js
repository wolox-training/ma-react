import { isArray } from './utils';

export function min(array) {
  if(!isArray(array))
    return array;
  
  return Math.min(array);
}

export function copy() {

}
