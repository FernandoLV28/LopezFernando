var n = [],p = 0;

for (i = 0; i < 10e3; i++)
  n[i] = (Math.floor(Math.random() * 10e3))

function up(a, b) {
  return a - b;
}
function BusquedaBinario(n2,n) {
  n.sort(up);
  console.log(n)
  var low = 0, high = n.length - 1, mid, element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    element = n[mid]
    if (element < n2) {
      low = mid + 1
    } else if (element > n2) {
      high = mid - 1;
    } else {
      return "La posicion en el array es: " + mid;
    }
    p++
  }
  return "La posicion en el array es: " + -1
}
n2 = Math.floor(Math.random() * 10e3);
console.log("x: " + n2)
console.log(BusquedaBinario(n2, n))
console.log("pasos: " + p)
p=0

for (i = 0; i < 10e4 - 1; i++)
  n[i] = (Math.floor(Math.random() * 10e4))
n2 = Math.floor(Math.random() * 10e4);
console.log("x: " + n2)
console.log(BusquedaBinario(n2, n))
console.log("pasos: " + p)
p=0

for (i = 0; i < 10e5 - 1; i++)
  n[i] = (Math.floor(Math.random() * 10e5))
n2 = Math.floor(Math.random() * 10e5);
console.log("x: " + n2)
console.log(BusquedaBinario(n2, n))
console.log("pasos: " + p)