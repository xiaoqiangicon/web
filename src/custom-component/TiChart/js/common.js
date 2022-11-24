let getSize = function(size) {
  let screenWidth = document.documentElement.clientWidth;
  return (size * screenWidth) / 3840;
};

let assiginObj = function(target = {}, sources = {}) {
  let obj = target;
  if (typeof target != "object" || typeof sources != "object") {
    return sources; // 如果其中一个不是对象 就返回sources
  }
  for (let key in sources) {
   
    // 如果target也存在相同key 那就再次合并
    if (target.hasOwnProperty(key)) {
      obj[key] = this.assiginObj(target[key], sources[key]);
    } else {
      // 不存在就直接添加
      obj[key] = sources[key];
    }
  }
  return obj;
};
export default {
  getSize,
  assiginObj
};
