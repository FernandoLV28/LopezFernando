var n = [], r = 1,n2, repit = 0;


for (i = 0; i <=4; i++)
  n[i] = Math.floor(Math.random() * (4-1)+1);
console.log(n)
may = Math.floor(n.length / 2)
n.sort()
console.log(n)

do {
  for (i = 0; i < n.length; i++) {
    if (n[i] == n[i + 1]) {
      r++
      repit = r
      n2 = n[i]
    } else {
      r = 1
      if (repit > r) {
        temp = repit
      }
    }
  }
} while (temp < repit)

if (repit > may)
  console.log("La moda es " + n2)
else 
  console.log("No se encontro una moda")