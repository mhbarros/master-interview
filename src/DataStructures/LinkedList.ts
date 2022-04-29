interface ListNode {
  value: any
  next?: ListNode
}

class LinkedList {
  head: ListNode|undefined

  get() {
    return this.head
  }

  add(node: ListNode) {
    if(!this.head) {
      this.head = node
      return
    }

    const trueHead = this.head
    while(typeof this.head.next !== 'undefined') {
      this.head = this.head.next
    }

    this.head.next = node
    this.head = trueHead
  }

  removeByValue(value: any) {
    if(!this.head) return // nothing to remove
    if(this.head.value === value) { // if it's the first element
      this.head = this.head.next
      return
    }

    const trueHead = this.head
    let previousElement: ListNode|undefined

    while(this.head.next && this.head.value !== value) {
      previousElement = this.head
      this.head = this.head.next
    }

    if(previousElement) {
      previousElement.next = this.head.next
    }

    this.head = trueHead
  }

  removeByIndex(index: number) {
    if(index < 0 || !this.head) return

    if(index === 0) {
      if(this.head.next) {
        this.head = this.head.next
        return
      }

      this.head = undefined
      return
    }

    const trueHead = this.head

    let i = 0;
    let previousElement: ListNode|undefined
    while(i < index && this.head) {
      previousElement = this.head
      this.head = this.head.next
      i+=1
    }

    if(this.head && previousElement) {
      previousElement.next = this.head.next
    }

    this.head = trueHead;
  }


}

export {
  LinkedList,
  ListNode
}
