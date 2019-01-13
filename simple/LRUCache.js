class LRUCache {
  constructor(size) {
    this.size = size;
    this.map = {};
    this.liveKeys = []
  }

  put(key, value) {
    this.map[key] = value;

    this.liveKeys.push(key);
    if (this.liveKeys.length > this.size) {
      const keyToEvict = this.liveKeys[0];
      this.liveKeys.splice(0, 1);
      delete this.map[keyToEvict]
    }
  }

  get(key) {
    return this.map[key];
  }
}

module.exports = LRUCache;
