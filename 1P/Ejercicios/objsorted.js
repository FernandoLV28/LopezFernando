var n={},n2={}

for(i=1;i<=10e3;i++){
	var key=Math.floor(Math.random()*10e3);
	n[key]=key
}
console.log(n)

a=Object.keys(n)
for (i = 0; i < a.length; i++) {
  var key = "name:"
  n2[key + a[i]] = key + a[i]
}
console.log(n2)