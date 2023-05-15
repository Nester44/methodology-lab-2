export class LinkedList {
  constructor() {
    this.data = []
  }

  get length() {
    return this.data.length
  }

  append(element) {
    this.data.push(element)
  }

  insert(element, index) {
    if (index < 0 || index > this.data.length) throw 'Out of bounds'
    this.data.splice(index, 0, element)
  }

  delete(index) {
    if (index < 0 || index >= this.data.length)
      throw new Error('Index out of bounds')
    return this.data.splice(index, 1)[0]
  }

  deleteAll(element) {
    this.data = this.data.filter((e) => e !== element)
  }

  get(index) {
    if (index < 0 || index >= this.data.length)
      throw new Error('Index out of bounds')
    return this.data[index]
  }

  clone() {
    const newList = new LinkedList()
    newList.data = [...this.data]
    return newList
  }

  reverse() {
    this.data.reverse()
  }

  findFirst(element) {
    return this.data.indexOf(element)
  }

  findLast(element) {
    return this.data.lastIndexOf(element)
  }

  clear() {
    this.data = []
  }

  extend(elements) {
    this.data.push(...elements.data)
  }
}
