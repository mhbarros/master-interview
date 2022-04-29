class Queue {
  elements: any = []

  constructor() {
  }

  get(){
    return this.elements
  }

  add(element: any){
    this.elements.push(element)
  }

  remove(){
    this.elements.shift()
  }
}

export default Queue
