class LRUCache {
  constructor(size) {
    this.size = size;
    this.currentSize = 0;
    this.map = {};
    this.liveKeys = []
  }

  put(key, value, weight) {
    this.map[key] = value;
    this.currentSize += weight

    this.liveKeys.push({ key, weight });
    if (this.currentSize > this.size) {
      const { 
        key: keyToEvict, 
        weight: evictedWeight 
      } = this.liveKeys[0];

      this.liveKeys.splice(0, 1);
      delete this.map[keyToEvict]
      this.currentSize -= evictedWeight
    }
  }

  get(key) {
    return this.map[key];
  }
}

module.exports = LRUCache;
