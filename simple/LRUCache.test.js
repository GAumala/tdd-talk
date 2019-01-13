const LRUCache = require('./LRUCache.js')

describe('LRUCache', () => {
  it('can retrieve inserted item', () => {
    const cache = new LRUCache(10);
    cache.put('first', 1);
    const retrieved = cache.get('first')
    
    expect(retrieved).toEqual(1);
  })
  it('discards older entries', () => {
    const cache = new LRUCache(10);
    cache.put('first', 1);

    Array(11).fill(0).forEach((item, index) => {
      cache.put(index, item);
    })

    expect(cache.get(10)).toBe(0);
    expect(cache.get(0)).toBeUndefined();
  })
})
