export { Linked, Node }

import Node from './node.js'

function Linked(n) {
  this.head = n
  this.tail = n
  this.size = 1
  this.getHead = getHead
  this.prepend = prepend
  this.append = append
  this.traverse = traverse
  this.contains = contains
  this.getTail = getTail
  this.InsertAfter = InsertAfter
  this.InsertBefore = InsertBefore
}

function getHead() { 
  return this.head 
}

function prepend(n) {
  n.next = this.head
  this.head = n
  this.size++
}

function append(n) {
  n.next = null
  this.tail.next = n
  this.tail = n
  this.size++
}

function traverse() {
  let c = this.head
  while (c) {
    //console.log(c.key)
    console.log(c.data)
    c = c.next
  }
  console.log('\n')
}


function contains(x) {
  let c = this.head, contain
  while (c) {
    if (x == c.data) {
      contain = c.data
    }
    c = c.next
  }
  if (x == contain) {
    return contain
  } else {
    return false
  }
}

function getTail() {
  let c = this.head, tail
  while (c) {
    tail = c.data
    c = c.next
  }
  return tail
}

function InsertAfter(value,after){
  let c = this.head,next
  while (c) {
    if(after==c.data){
      next=c.next
      c.next=value
      value.next=next
    }
    c = c.next
  }
}

function InsertBefore(value, before) {
  let c = this.head,previous,next
  if (c.next == null) {
    this.prepend(value)
  } else {
    if (before != this.head.data) {
      while (c) {
        if (before != c.data) {
          previous = c
        } else {
          next = previous.next
          previous.next = value
          value.next = next
        }
        c = c.next
      }
    } else {
      this.prepend(value)
    }
  }
}