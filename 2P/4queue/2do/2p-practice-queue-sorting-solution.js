/** 
 *
 * your solution here
 *
 */

function queue(top) {
    this.size = []
    this.top = top
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.full = full
    this.empty = empty
    this.print = print
    this.peek = peek
  
    function enqueue(x) {
      if (this.full()) {
        console.log("Fila llena")
      } else {
        this.size.push(x)
      }
    }

    function dequeue() {
      if (this.empty()) {
        console.log("La fila está vacia")
      } else {
        return this.size.shift()
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

    function peek() {
      return this.size[0]
    }

  }
  
  var steps = [0, 0, 0, 0, 0]
  var time = [0, 0, 0, 0, 0]
  
  function order(x) {
    for (let c = 0; c <= 4; c++) {
      let q1 = new queue(x)
      let q2 = new queue(x)
      var inicio = Date.now()
      let a1, a2
      let i = 1;
  
      a1 = Math.floor(Math.random() * (x - 1) + 1)
      q1.enqueue(a1)
      while (i < x) {
        a2 = Math.floor(Math.random() * (x - 1) + 1)
  
        while (q1.empty() != true) {
          q2.enqueue(q1.dequeue())
          steps[c] = steps[c] + 1
        }
        while (a2 > q2.peek()) {
          q1.enqueue(q2.dequeue())
          steps[c] = steps[c] + 1
        }
        if (q2.empty()) {
          q1.enqueue(a2)
          steps[c] = steps[c] + 1
        }
        if (a2 <= q2.peek()) {
          q1.enqueue(a2)
          steps[c] = steps[c] + 1
        }
        while (q2.empty() != true) {
          q1.enqueue(q2.dequeue())
        }
        i++
      }
      var fin = Date.now()
      console.log(q1.print())
      console.log("Pasos Ciclo: " + (c + 1) + " : " + steps[c])
      time[c] = fin - inicio
      console.log("Tiempo Ciclo: " + (c + 1) + " : " + time[c] + "ms")
    }
  }

  let t, s
  order(10)
    s = steps[0] + steps[1] + steps[2] + steps[3] + steps[4]
    t = time[0] + time[1] + time[2] + time[3] + time[4]
        console.log("Total pasos: " + s)
        console.log("Total tiempo: " + t)
        console.log("Promedio de pasos: " + s / 5)
        console.log("Promedio de tiempo: " + t / 5)
    
  order(100)
    s = steps[0] + steps[1] + steps[2] + steps[3] + steps[4]
    t = time[0] + time[1] + time[2] + time[3] + time[4]
        console.log("Total pasos: " + s)
        console.log("Total tiempo: " + t)
        console.log("Promedio pasos: " + s / 5)
        console.log("Promedio tiempo: " + t / 5)
    
  order(1000)
    s = steps[0] + steps[1] + steps[2] + steps[3] + steps[4]
    t = time[0] + time[1] + time[2] + time[3] + time[4]
        console.log("Total pasos: " + s)
        console.log("Total tiempo: " + t)
        console.log("Promedio pasos: " + s / 5)
        console.log("Promedio tiempo: " + t / 5)