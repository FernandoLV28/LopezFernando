/** 
 *
 * your solution here
 *
 */

function stack(top) {
    this.tamaño = []
    this.top = top
    this.push = push
    this.pop = pop
    this.empty = empty
    this.full = full
    this.show = show
    this.peek = peek
  
    function push(element) {
      if (this.full()) {
        console.log("Está llena")
      } else {
        this.tamaño.unshift(element)
      }
    }
  
    function pop() {
      if (this.empty()) {
        console.log("Está vacia")
      }
      else {
        return this.tamaño.shift()
      }
    }
  
    function full() {
      if (this.tamaño.length === this.top)
        return true
      else
        return false
    }
  
    function empty() {
      if (this.tamaño.length === 0)
        return true
      else
        return false
    }
  
    function show() {
      let show = ""
      for (let i = 0; i < this.tamaño.length; ++i) {
        show += this.tamaño[i] + "\n"
      }
      return show
    }
  
    function peek() {
      return this.tamaño[0]
    }
  }


  var pasos = [0, 0, 0, 0, 0]
  var tiempo = [0, 0, 0, 0, 0]

    function ordenar(x) {
        for (let ciclo = 0; ciclo <= 4; ciclo++) {
        let pila1 = new stack(x)
        let pila2 = new stack(x)
        var inicio = Date.now()
        let a1, a2
            a1 = Math.floor(Math.random() * (x - 1) + 1)
  
        let i = 1;
        pila1.push(a1)
  
        while (i < x) {
            while (!pila2.empty()) {
            pila1.push(pila2.pop())
            pasos[ciclo] = pasos[ciclo] + 1
            }
            a2 = Math.floor(Math.random() * (x - 1) + 1)
            while (a2 <= pila1.peek() && !pila1.empty()) {
            pila2.push(pila1.pop())
            pasos[ciclo] = pasos[ciclo] + 1
            }
            if (a2 >= pila1.peek() || pila1.empty()) {
            pila1.push(a2)
            pasos[ciclo] = pasos[ciclo] + 1
            }
            i++
      }
        while (!pila2.empty()) {
            pila1.push(pila2.pop())
      }
        var fin = Date.now()
        console.log(pila1.show())
        console.log("Pasos ciclo: " + (ciclo + 1) + " son: " + pasos[ciclo])
        tiempo[ciclo] = fin - inicio
        console.log("Tiempo ciclo: " + (ciclo + 1) + " es: " + tiempo[ciclo] + "ms")
     }
  }

  
  let time, steps
    ordenar(10)
    steps = pasos[0] + pasos[1] + pasos[2] + pasos[3] + pasos[4]
    time = tiempo[0] + tiempo[1] + tiempo[2] + tiempo[3] + tiempo[4]
        console.log("Total pasos: " + steps)
        console.log("Total tiempo: " + time)
        console.log("Promedio pasos: " + steps / 5)
        console.log("Promedio tiempo: " + time / 5)
    ordenar(100)
    steps = pasos[0] + pasos[1] + pasos[2] + pasos[3] + pasos[4]
    time = tiempo[0] + tiempo[1] + tiempo[2] + tiempo[3] + tiempo[4]
        console.log("Total pasos: " + steps)
        console.log("Total tiempo: " + time)
        console.log("Promedio pasos: " + steps / 5)
        console.log("Promedio tiempo: " + time / 5)
    ordenar(1000)
    steps = pasos[0] + pasos[1] + pasos[2] + pasos[3] + pasos[4]
    time = tiempo[0] + tiempo[1] + tiempo[2] + tiempo[3] + tiempo[4]
        console.log("Total pasos: " + steps)
        console.log("Total tiempo: " + time)
        console.log("Promedio pasos: " + steps / 5)
        console.log("Promedio tiempo: " + time / 5)