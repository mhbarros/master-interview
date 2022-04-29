import Stack from '../Stack'

it('should add new element', () => {
  const stack = new Stack()
  stack.add(1)
  stack.add(2)
  stack.add(3)

  const result = stack.get()
  expect(result).toStrictEqual([1,2,3])
})

it('should remove elements', () => {
  const stack = new Stack()
  stack.add(1)
  stack.add(2)
  stack.add(3)

  stack.remove()

  const result = stack.get()

  expect(result).toStrictEqual([1,2])
})

it('should get current state', () => {
  const stack = new Stack()
  stack.add(1)

  const result = stack.get()

  expect(result).toStrictEqual([1])
})
