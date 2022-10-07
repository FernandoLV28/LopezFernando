var x=11, a, n;

i = 0
while (x > 0) {
  i +=1
  n = 1
  a = 0
  while (n <= i) {
    if (i % n == 0) {
      a++
    }
    n++
  }
  if (a == 2) {
    console.log(i)
    x--
  }
}