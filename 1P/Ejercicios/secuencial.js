var n = [], pas = 0;
var n = [], p = 0;

for (i = 0; i < 10e3; i++)
  n[i] = (Math.floor(Math.random() * 10e3))

function busqueda_Secuencial(n2, n) {
  console.log(n);
  for (var i in n) {
    if (n[i] == n2) {
      return "La posicion en el array es: " + i;
    }
    p++
  }
  return "La posicion en el array es: " + -1;
}

n2 = Math.floor(Math.random() * 10e3)
console.log("x: " + n2)
console.log(busqueda_Secuencial(n2, n))
console.log("pasos: "+p)
p=0
for (i = 0; i < 10e4; i++)
  n[i] = (Math.floor(Math.random() * 10e4))

n2 = Math.floor(Math.random() * 10e4)
console.log("números: " + n2)
console.log(busqueda_Secuencial(n2, n))
console.log("pasos: "+p)
p=0
for (i = 0; i < 10e5; i++)
  n[i] = (Math.floor(Math.random() * 10e5))
n2 = Math.floor(Math.random() * 10e5)
console.log("números: " + n2)
console.log(busqueda_Secuencial(n2, n))
console.log("pasos: "+p)