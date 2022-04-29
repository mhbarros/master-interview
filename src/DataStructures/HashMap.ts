class HashMap {
  elements: any = {}

  constructor() {
  }

  get() {
    return this.elements
  }

  add(key: any, value: any, overrideExistingElement: boolean = true){
    const currentElement = this.elements[key]
    if((typeof currentElement !== 'undefined' && overrideExistingElement)
      || typeof currentElement === 'undefined') {

      this.elements[key] = value
    }
  }

  remove(key: any) {
    delete this.elements[key]
  }
}

export default HashMap
