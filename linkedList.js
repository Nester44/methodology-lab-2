class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

export class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  append(element) {
    const node = new Node(element)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
  }

  insert(element, index) {
    if (index < 0 || index > this.length) throw 'Out of bounds'
    const node = new Node(element)
    let current
    if (index === 0) {
      if (this.head !== null) {
        current = this.head
        node.next = current
        current.prev = node
      }
      this.head = node
      if (!this.tail) {
        this.tail = node
      }
    } else if (index === this.length) {
      current = this.tail
      node.prev = current
      current.next = node
      this.tail = node
    } else {
      current = this.head
      let i = 0
      while (i++ < index) {
        current = current.next
      }
      node.next = current
      node.prev = current.prev
      current.prev.next = node
      current.prev = node
    }
    this.length++
  }

  delete(index) {
    if (index < 0 || index >= this.length)
      throw new Error('Index out of bounds')
    let current = this.head
    let i = 0

    if (index === 0) {
      this.head = current.next
      if (this.head) {
        this.head.prev = null
      } else {
        this.tail = null
      }
    } else if (index === this.length - 1) {
      current = this.tail
      this.tail = current.prev
      this.tail.next = null
    } else {
      while (i++ < index) {
        current = current.next
      }
      current.prev.next = current.next
    }
    this.length--
    return current.data
  }

  deleteAll(element) {
    let current = this.head
    while (current) {
      if (current.data === element) {
        if (current === this.head && current === this.tail) {
          this.head = null
          this.tail = null
        } else if (current === this.head) {
          this.head = this.head.next
          this.head.prev = null
        } else if (current === this.tail) {
          this.tail = this.tail.prev
          this.tail.next = null
        } else {
          current.prev.next = current.next
          current.next.prev = current.prev
        }
        this.length--
      }
      current = current.next
    }
  }

  get(index) {
    if (index < 0 || index >= this.length)
      throw new Error('Index out of bounds')
    let current = this.head
    let i = 0

    while (i++ < index) {
      current = current.next
    }
    return current.data
  }

  clone() {
    const newList = new LinkedList()
    let current = this.head

    while (current) {
      newList.append(current.data)
      current = current.next
    }
    return newList
  }

  reverse() {
    let current = this.head
    let prev = null

    while (current) {
      const next = current.next
      current.next = prev
      current.prev = next
      prev = current
      current = next
    }
    this.tail = this.head
    this.head = prev
  }

  findFirst(element) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.data === element) return index
      current = current.next
      index++
    }
    return -1
  }

  findLast(element) {
    let current = this.tail
    let index = this.length - 1
    while (current) {
      if (current.data === element) return index
      current = current.prev
      index--
    }
    return -1
  }

  clear() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  extend(elements) {
    let current = elements.head
    while (current) {
      this.append(current.data)
      current = current.next
    }
  }
}
