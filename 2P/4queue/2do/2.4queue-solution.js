function queue() {
    this.size = []
    this.top = 5
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.full = full
    this.empty = empty
    this.print = print
  
    function enqueue(x) {
      if (this.full() != true) {
        this.size.push(x)
      } else {
        console.log("Fila llena")
      }
    }

    function dequeue() {
      if (this.empty() != true) {
        this.size.shift()
      } else {
        console.log("Fila vacia")
      }
    }

    function full() {
      if (this.size.length === this.top) {
        return true
      }
      else {
        return false
      }
    }

    function empty() {
      if (this.size.length === 0) {
        return true
      }
      else {
        return false
      }
    }

    function print() {
      let i = ""
      for (let j = 0; j < this.size.length; j++) {
        i += this.size[j] + "\n"
      }
      return i
    }
  }
  

  let q = new queue()
  
  q.enqueue(1)
  q.enqueue(2)
  q.enqueue(3)
  q.enqueue(4)
  q.enqueue(5)
  q.enqueue(6)
  console.log(q.print())
  q.dequeue()
  console.log(q.print())
  q.dequeue()
  q.dequeue()
  q.dequeue()
  q.dequeue()
  q.dequeue()