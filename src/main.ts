import {LinkedList, ListNode} from "./DataStructures/LinkedList";

const linked = new LinkedList()
linked.add({value: 1} as ListNode)
linked.add({value: 2} as ListNode)
linked.add({value: 3} as ListNode)

linked.removeByIndex(0)
console.log(linked.get())
