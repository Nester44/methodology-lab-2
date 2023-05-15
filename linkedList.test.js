import { LinkedList } from './linkedList'

describe('LinkedList', () => {
  let linkedList

  beforeEach(() => {
    linkedList = new LinkedList()
  })

  test('starts empty', () => {
    expect(linkedList.length).toBe(0)
  })

  test('appends elements correctly', () => {
    linkedList.append('a')
    linkedList.append('b')
    linkedList.append('c')
    expect(linkedList.length).toBe(3)
  })

  test('inserts elements correctly', () => {
    linkedList.insert('a', 0)
    linkedList.insert('b', 1)
    linkedList.insert('c', 2)
    expect(linkedList.length).toBe(3)
  })

  test('throws error when inserting at invalid index', () => {
    expect(() => linkedList.insert('a', -1)).toThrow()
    expect(() => linkedList.insert('a', 1)).toThrow()
  })

  test('deletes elements correctly', () => {
    linkedList.append('a')
    linkedList.append('b')
    linkedList.append('c')
    linkedList.delete(1)
    expect(linkedList.length).toBe(2)
  })

  test('throws error when deleting at invalid index', () => {
    expect(() => linkedList.delete(-1)).toThrow()
    expect(() => linkedList.delete(0)).toThrow()
  })

  test('deletes all elements correctly', () => {
    linkedList.append('a')
    linkedList.append('b')
    linkedList.append('a')
    linkedList.deleteAll('a')
    expect(linkedList.length).toBe(1)
  })

  test('gets elements correctly', () => {
    linkedList.append('a')
    linkedList.append('b')
    linkedList.append('c')
    expect(linkedList.get(0)).toBe('a')
    expect(linkedList.get(1)).toBe('b')
    expect(linkedList.get(2)).toBe('c')
  })

  test('throws error when getting at invalid index', () => {
    expect(() => linkedList.get(-1)).toThrow()
    expect(() => linkedList.get(0)).toThrow()
  })

  test('clones list correctly', () => {
    linkedList.append('a')
    linkedList.append('b')
    let clone = linkedList.clone()
    expect(clone.length).toBe(linkedList.length)
    expect(clone.get(0)).toBe(linkedList.get(0))
    expect(clone.get(1)).toBe(linkedList.get(1))
  })

  test('reverses list correctly', () => {
    linkedList.append('a')
    linkedList.append('b')
    linkedList.reverse()
    expect(linkedList.get(0)).toBe('b')
    expect(linkedList.get(1)).toBe('a')
  })

  test('finds first element correctly', () => {
    linkedList.append('a')
    linkedList.append('b')
    linkedList.append('a')
    expect(linkedList.findFirst('a')).toBe(0)
    expect(linkedList.findFirst('b')).toBe(1)
    expect(linkedList.findFirst('c')).toBe(-1)
  })

  test('finds last element correctly', () => {
    linkedList.append('a')
    linkedList.append('b')
    linkedList.append('a')
    expect(linkedList.findLast('a')).toBe(2)
    expect(linkedList.findLast('b')).toBe(1)
    expect(linkedList.findLast('c')).toBe(-1)
  })

  test('clears list correctly', () => {
    linkedList.append('a')
    linkedList.append('b')
    linkedList.append('c')
    linkedList.clear()
    expect(linkedList.length).toBe(0)
  })

  test('extends list correctly', () => {
    linkedList.append('a')
    linkedList.append('b')
    const secondList = new LinkedList()
    secondList.append('c')
    secondList.append('d')
    linkedList.extend(secondList)
    expect(linkedList.length).toBe(4)
    expect(linkedList.get(2)).toBe('c')
    expect(linkedList.get(3)).toBe('d')
  })
})
