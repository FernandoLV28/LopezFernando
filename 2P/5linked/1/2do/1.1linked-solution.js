import { Linked, Node } from '../../../../flv/linked/node5es.js'

let n1 = new Node('a')
let n2 = new Node('b')
let list = new Linked(n1)

list.append(n2)
list.append(new Node('c'))
list.traverse(list.getHead())

console.log(list.contains('a'))
console.log(list.getTail())