const formulario = document.getElementById('formulario');
let arreglo = [];

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

    let val = document.getElementById('val').value;
    let tmon = document.getElementById('tmon').value;
    let tcmon = document.getElementById('tcmon').value;


    cald(val, tmon, tcmon)

})


const cald = (valor, tmon, tcmon) => {
    let tcambio ='';
    let total ="" ;
            if (tmon == 'dolar') {
                    if (tcmon == 'pmex') {
                        tcambio = valor * 19.94 ;
                        total = tcambio + '  Pesos mexicanos' ;

                    } else 
                    if (tcmon == 'pcol'){ 
                        tcambio = valor * 3947.60 ;
                        total = tcambio + '  Pesos Colombianos' ;
                        
                    }else 
                    if (tcmon == 'euro'){
                        tcambio = valor * 0.85 ;
                        total = tcambio + '  Euros' ;
                    }else 
                    if (tcmon == 'lest'){
                        tcambio = valor * 0.72 ;
                        total = tcambio + '  Libras Esterlinas' ;
                    }

                 } else if (tmon == 'pmex'){
                    if (tcmon == 'dolar'){
                        tcambio = valor * 0.050 ;
                        total = tcambio + '  Dolares' ;
                    }else
                    if (tcmon == 'pcol'){
                        tcambio = valor * 197.99 ;
                        total = tcambio + '  Pesos Colombianos' ;
                    }else
                    if (tcmon == 'euro'){
                        tcambio = valor * 0.043 ;
                        total = tcambio + '  Euros' ;
                    }else
                    if (tcmon == 'lest'){
                        tcambio = valor * 0.036 ;
                        total = tcambio + '  Libras Esterlinas' ;
                    }
                
                
            }else if (tmon == 'pcol' ){
                    if (tcmon == 'dolar'){ 
                        tcambio = valor * 0.00025 ;
                        total = tcambio + '  Dolares' ;    
                    }else 
                    if (tcmon == 'pmex'){
                        tcambio = valor * 0.0050 ;
                        total = tcambio + '  Pesos Mexicanos' ;
                    }else 
                    if (tcmon == 'euro'){
                        tcambio = valor * 0.00022 ;
                        total = tcambio + '  Euros' ;
                    }else 
                    if (tcmon == 'lest'){
                        tcambio = valor * 0.00018 ;
                        total = tcambio + '  libras Esternias' ;
                    }

            }else if (tmon == 'euro'){
                    if (tcmon == 'dolar'){
                        tcambio = valor * 1.17 ;
                        total = tcambio + '  Dolares' ;
                    } else
                    if (tcmon == 'pmex'){
                        tcambio = valor * 23.42 ;
                        total = tcambio + '  Pesos Mexicanos' ;
                    }else 
                    if (tcmon == 'pcol'){
                        tcambio = valor * 4639.05 ;
                        total = tcambio + '  Pesos Colombianos' ;
                    }else 
                    if (tcmon == 'lest'){
                        tcambio = valor * 0.85 ;
                        total = tcambio + '  Libras Esterlinas' ;
                    }

            }else if (tmon == 'lest'){
                    if(tcmon == 'dolar'){
                        tcambio = valor * 1.39 ;
                        total = tcambio + '  Dolares' ;
                    }else
                    if (tcmon == 'pmex'){
                        tcambio = valor * 27.67 ;
                        total = tcambio + '  Pesos Mexicanos' ;
                    }else 
                    if (tcmon == 'pcol'){
                        tcambio = valor * 5481.97 ;
                        total = tcambio + '  Pesos Colombianos' ;

                    }else
                    if (tcmon == 'euro') {
                        tcambio = valor * 1.18 ;
                        total = tcambio + '  Euros' ;
                    }

            } document.getElementById("cambio").innerHTML += '<section>' + total + '</section>' ;
        
           

}
