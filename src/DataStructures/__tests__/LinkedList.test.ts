import {LinkedList, ListNode} from "../LinkedList";

it('should add new element', () => {
  const linkedList = new LinkedList()
  linkedList.add({value: 'abc'} as ListNode)
  linkedList.add({value: 'def'} as ListNode)
  linkedList.add({value: 'ghi'} as ListNode)

  const result = linkedList.get()

  expect(result).toStrictEqual({
    value: 'abc',
    next: {
      value: 'def',
      next: {
        value: 'ghi',
        next: undefined
      }
    }
  })
})

it('should remove elements by value from the center of the list', () => {
  const linkedList = new LinkedList()
  linkedList.add({value: 'abc'} as ListNode)
  linkedList.add({value: 'def'} as ListNode)
  linkedList.add({value: 'ghi'} as ListNode)

  linkedList.removeByValue('def')

  const result = linkedList.get()

  expect(result).toStrictEqual({
    value: 'abc',
    next: {
      value: 'ghi',
      next: undefined
    }
  })
})

it('should remove elements by value from the end of the list', () => {
  const linkedList = new LinkedList()
  linkedList.add({value: 'abc'} as ListNode)
  linkedList.add({value: 'def'} as ListNode)
  linkedList.add({value: 'ghi'} as ListNode)

  linkedList.removeByValue('ghi')

  const result = linkedList.get()

  expect(result).toStrictEqual({
    value: 'abc',
    next: {
      value: 'def',
      next: undefined
    }
  })
})

it('should remove elements by value from the start of the list', () => {
  const linkedList = new LinkedList()
  linkedList.add({value: 'abc'} as ListNode)
  linkedList.add({value: 'def'} as ListNode)
  linkedList.add({value: 'ghi'} as ListNode)

  linkedList.removeByValue('abc')

  const result = linkedList.get()

  expect(result).toStrictEqual({
    value: 'def',
    next: {
      value: 'ghi',
      next: undefined
    }
  })
})

it("should stay the same if remove element by value that doesn't exsists", () => {
  const linkedList = new LinkedList()
  linkedList.add({value: 'abc'} as ListNode)
  linkedList.add({value: 'def'} as ListNode)

  linkedList.removeByValue('ghi')

  const result = linkedList.get()

  expect(result).toStrictEqual({
    value: 'abc',
    next: {
      value: 'def',
      next: undefined
    }
  })
})

it('should remove elements by index from the center of the list', () => {
  const linkedList = new LinkedList()
  linkedList.add({value: 'abc'} as ListNode)
  linkedList.add({value: 'def'} as ListNode)
  linkedList.add({value: 'ghi'} as ListNode)

  linkedList.removeByIndex(1)

  const result = linkedList.get()

  expect(result).toStrictEqual({
    value: 'abc',
    next: {
      value: 'ghi',
      next: undefined
    }
  })
})

it('should remove elements by index from the end of the list', () => {
  const linkedList = new LinkedList()
  linkedList.add({value: 'abc'} as ListNode)
  linkedList.add({value: 'def'} as ListNode)
  linkedList.add({value: 'ghi'} as ListNode)

  linkedList.removeByIndex(2)

  const result = linkedList.get()

  expect(result).toStrictEqual({
    value: 'abc',
    next: {
      value: 'def',
      next: undefined
    }
  })
})

it('should remove elements by index from the start of the list', () => {
  const linkedList = new LinkedList()
  linkedList.add({value: 'abc'} as ListNode)
  linkedList.add({value: 'def'} as ListNode)
  linkedList.add({value: 'ghi'} as ListNode)

  linkedList.removeByIndex(0)

  const result = linkedList.get()

  expect(result).toStrictEqual({
    value: 'def',
    next: {
      value: 'ghi',
      next: undefined
    }
  })
})

it("should stay the same if remove element by index that doesn't exsists", () => {
  const linkedList = new LinkedList()
  linkedList.add({value: 'abc'} as ListNode)
  linkedList.add({value: 'def'} as ListNode)

  linkedList.removeByIndex(4)

  const result = linkedList.get()

  expect(result).toStrictEqual({
    value: 'abc',
    next: {
      value: 'def',
      next: undefined
    }
  })
})

it('should get current state', () => {
  const linkedList = new LinkedList()
  linkedList.add({value: 'abc'} as ListNode)
  linkedList.add({value: 'def'} as ListNode)

  const result = linkedList.get()

  expect(result).toStrictEqual({
    value: 'abc',
    next: {
      value: 'def',
      next: undefined
    }
  })
})
