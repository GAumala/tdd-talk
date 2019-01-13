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

  describe.only('with weights', () => {
    it('takes weight into account for evictions', () => {
      const cache = new LRUCache(10);
      cache.put('first', 1, 5);
      cache.put('second', 2, 3);
      cache.put('third', 3, 6);

      expect(cache.get('first')).toBeUndefined();
      expect(cache.get('second')).toBe(2);
      expect(cache.get('third')).toBe(3);
    })
  })
})
