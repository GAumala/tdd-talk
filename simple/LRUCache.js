class LRUCache {
  constructor(size) {
    this.size = size;
    this.map = {};
  }

  put(key, value) {
    this.map[key] = value;
  }

  get(key) {
    return this.map[key];
  }
}

module.exports = LRUCache;
