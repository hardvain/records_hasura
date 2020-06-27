export function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    let key;
    try {
      key = property(obj);
    } catch (e) {
      key = 'Uncategorized';
    }
    if (!acc[key]) {
      acc[key] = [];
    }
    // Add object to list for given key's value
    acc[key].push(obj);
    return acc;

  }, {});
}
