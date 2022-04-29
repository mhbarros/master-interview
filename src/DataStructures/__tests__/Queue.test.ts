import Queue from '../Queue'

it('should add new element', () => {
  const queue = new Queue()
  queue.add(1)
  queue.add(2)
  queue.add(3)

  const result = queue.get()
  expect(result).toStrictEqual([1,2,3])
})

it('should remove elements', () => {
  const queue = new Queue()
  queue.add(1)
  queue.add(2)
  queue.add(3)

  queue.remove()

  const result = queue.get()

  expect(result).toStrictEqual([2,3])
})

it('should get current state', () => {
  const queue = new Queue()
  queue.add(1)

  const result = queue.get()

  expect(result).toStrictEqual([1])
})
