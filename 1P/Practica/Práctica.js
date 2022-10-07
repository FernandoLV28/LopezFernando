let a=[],pasos=0,b=[5],c=0,d=[],x,tiempo=0,g;

//Funciones de Burbuja y Seleccion

function aleatorio(a){
	a.length=x;
	for(j=0;j<=x-1;j++){
		a[j]=Math.floor(Math.random()*(x-1)+1);
	}
	console.log(a);
}
function ordenarB(a){
	pasos=0;
	for(k=1; k<a.length;k++){
			for(l=0;l<(a.length-k);l++){
				if(a[l]>a[l+1]){
					pasos++;
					aux = a[l];
					a[l]=a[l+1];
					a[l+1]=aux;
				}
			}
		}
	console.log(a);
	b[i-1]=pasos;
	console.log("Pasos dados en el ciclo " + i + " " +  pasos);
}
function ordenarS(a){
	pasos=0;
	for(k=0;k<a.length;k++){
		 min1=k;
		for(j=k+1;j<a.length;j++){
			if(a[j]<a[min1]){
				min1=j;
			}
		}
		if(min1!=k){
			aux=a[k];
			a[k]=a[min1];
			a[min1]=aux;
			pasos++
		}
	}
	console.log(a);
	b[i-1]=pasos;
	console.log("Pasos dados en el ciclo " + i + " " +  pasos);
}
function promedioP(){
	pasos=b[0]+b[1]+b[2]+b[3]+b[4];
	c=(pasos)/5;
}
function generarB(x){
	for(i=1;i<=5;i++){
		var start = Date.now()
		aleatorio(a)
		if(a[x-1]!=" "){
			ordenarB(a)
		}
		var end=Date.now()
		d[i-1]=end-start;
		console.log("Tiempo dado en el ciclo " + i + " " + d[i-1] + "ms")//Imprimir el tiempo en el que se realizo el ciclo
	}
}
function generarS(x){
	for(i=1;i<=5;i++){
		var start = Date.now()
		aleatorio(a);
		if(a[x-1]!=" "){
			ordenarS(a)
		}
		var end=Date.now()
		d[i-1]=end-start;
		console.log("Tiempo dado en el ciclo " + i + " " + d[i-1] + "ms")
	}
}
function promedioT(){
	tiempo=d[0]+d[1]+d[2]+d[3]+d[4]
	g=tiempo/5;
}

//Metodo De Burbuja

//Generacion de los primeros 500 numeros con burbuja
generarB(x=100);
promedioP()
promedioT()
console.log("Estos son los pasos que se dieron en 5 corridas del 1 al " + x + " : " + pasos);
console.log("El promedio de pasos con 5 corridas con numeros aleatorios del 1 al "+ x +" son " + c);
console.log("Estos es el tiempo que se obtuvo en 5 corridas del 1 al " + x + " : " + tiempo + "ms");
console.log("El promedio de tiempo con 5 corridas con numeros aleatorios del 1 al " + x+ " son " + g + "ms");

//Generacion de los primeros 5000 numeros con burbuja
generarB(x=1000);
promedioP()
promedioT()
console.log("Estos son los pasos que se dieron en 5 corridas del 1 al " + x + " : " + pasos);
console.log("El promedio de pasos con 5 corridas con numeros aleatorios del 1 al "+ x +" son " + c);
console.log("Estos es el tiempo que se obtuvo en 5 corridas del 1 al " + x + " : " + tiempo + "ms");
console.log("El promedio de tiempo con 5 corridas con numeros aleatorios del 1 al " + x+ " son " + g + "ms");

//Generacion de los primeros 50000 numeros con burbuja
generarB(x=10000);
promedioP()
promedioT()
console.log("Estos son los pasos que se dieron en 5 corridas del 1 al " + x + " : " + pasos);
console.log("El promedio de pasos con 5 corridas con numeros aleatorios del 1 al "+ x +" son: " + c);
console.log("Estos es el tiempo que se obtuvo en 5 corridas del 1 al " + x + " : " + tiempo + "ms");
console.log("El promedio de tiempo con 5 corridas con numeros aleatorios del 1 al " + x+ " son " + g + "ms");


console.log("////////METODO DE BURBUJA FINALIZADO////////")

//Metodo de Seleccion


//Generacion de los primeros 500 numeros con Seleccion
generarS(x=100);
promedioP()
promedioT()
console.log("Estos son los pasos que se dieron en 5 corridas del 1 al " + x + " : " + pasos);
console.log("El promedio de pasos con 5 corridas con numeros aleatorios del 1 al "+ x +" son " + c);
console.log("Estos es el tiempo que se obtuvo en 5 corridas del 1 al " + x + " : " + tiempo + "ms");
console.log("El promedio de tiempo con 5 corridas con numeros aleatorios del 1 al " + x+ " son " + g + "ms");

//Generacion de los primeros 5000 numeros con Seleccion
generarS(x=1000);
promedioP()
promedioT()
console.log("Estos son los pasos que se dieron en 5 corridas del 1 al " + x + " : " + pasos);
console.log("El promedio de pasos con 5 corridas con numeros aleatorios del 1 al "+ x +" son " + c);
console.log("Estos es el tiempo que se obtuvo en 5 corridas del 1 al " + x + " : " + tiempo + "ms");
console.log("El promedio de tiempo con 5 corridas con numeros aleatorios del 1 al " + x+ " son " + g + "ms");
 	
//Generacion de los primeros 50000 numeros con Seleccion
generarS(x=10000);
promedioP()
promedioT()
console.log("Estos son los pasos que se dieron en 5 corridas del 1 al " + x + " : " + pasos);
console.log("El promedio de pasos con 5 corridas con numeros aleatorios del 1 al "+ x +" son " + c);
console.log("Estos es el tiempo que se obtuvo en 5 corridas del 1 al " + x + " : " + tiempo + "ms");
console.log("El promedio de tiempo con 5 corridas con numeros aleatorios del 1 al " + x+ " son " + g + "ms");

console.log("////////METODO DE SELECCION FINALIZADO////////")