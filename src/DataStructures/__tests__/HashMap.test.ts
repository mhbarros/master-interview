import HashMap from "../HashMap";

it('should add new element', () => {
  const hashmap = new HashMap()
  hashmap.add(0, 1)
  hashmap.add('test', 'abc')

  const result = hashmap.get()

  expect(result).toStrictEqual({'test': 'abc', 0: 1})
})

it('should remove elements', () => {
  const hashmap = new HashMap()
  hashmap.add(0, 1)
  hashmap.add('test', 'abc')
  hashmap.remove('test')

  const result = hashmap.get()

  expect(result).toStrictEqual({0: 1})
})

it("should keep the same if remove elements that doesn't exists", () => {
  const hashmap = new HashMap()
  hashmap.add(0, 1)
  hashmap.add('test', 'abc')
  hashmap.remove('abc')

  const result = hashmap.get()

  expect(result).toStrictEqual({0: 1, 'test': 'abc'})
})

it('should get current state', () => {
  const hashmap = new HashMap()
  hashmap.add(1, 'abc')

  const result = hashmap.get()

  expect(result).toStrictEqual({1: 'abc'})
})

it('should replace an existing value by default', () => {
  const hashmap = new HashMap()
  hashmap.add(1, 'abc')
  hashmap.add(1, 'def')

  const result = hashmap.get()

  expect(result).toStrictEqual({1: 'def'})
})

it('should not replace existing value', () => {
  const hashmap = new HashMap()
  hashmap.add(1, 'abc')
  hashmap.add(1, 'def', false)

  const result = hashmap.get()

  expect(result).toStrictEqual({1: 'abc'})
})
