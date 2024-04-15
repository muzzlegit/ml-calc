export function deepCopy(object) {
  if (typeof object !== "object" || !object) return object;
  let copy;
  if (Array.isArray(object)) {
    copy = [];
    for (let i = 0; i < object.length; i++) {
      copy[i] = deepCopy(object[i]);
    }
  } else {
    copy = {};
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        copy[key] = deepCopy(object[key]);
      }
    }
  }

  return copy;
}
