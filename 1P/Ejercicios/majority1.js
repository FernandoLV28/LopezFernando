var n = [], n2 = [], n3, repit = 0;

for (i = 0; i <= 4; i++) {
  n[i] = Math.floor(Math.random() *(4-1)+1);
}
console.log(n)
may = Math.floor(n.length/2)
for (i = 0; i <= 4; i++) {
  n2[i] = 0;
}
x = 1;
do {
  for (i = 0; i < n.length; i++) {
    if (x == n[i]) {
      n2[x - 1] = n2[x - 1] + 1
    }
  }
  x++;
} while (x < 5);

for (i = 0; i < n2.length; i++) {
  if (n2[i] >= repit) {
    repit = n2[i];
    n3 = i + 1;
  }
}

if (repit > may) {
    console.log(n3 + " está repetido " + repit)
}
else {
  console.log("no hay moda")
}