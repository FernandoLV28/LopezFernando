function triangular_series(n){
    let i, j = 1, k = 1;
    for (i = 1; i <= n; i++)
    {
        console.log(k+" ");
        j = j + 1; 
        k = k + j;
    }
}
    let n = 11;
    triangular_series(n);