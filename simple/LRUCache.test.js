const LRUCache = require('./LRUCache.js')

describe('LRUCache', () => {
  it('can retrieve inserted item', () => {
    const cache = new LRUCache(10);
    cache.put('first', 1);
    const retrieved = cache.get('first')
    
    expect(retrieved).toEqual(1);
  })
})
