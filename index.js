var recipes = { foo : 'bar' }

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({},obj, {[key] : value})
}