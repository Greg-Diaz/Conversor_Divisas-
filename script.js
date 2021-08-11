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
    
            if (tmon == 'dolar' ) {
                    if (tcmon == 'pmex') {
                        tcambio = valor * 19,94 ;

                    } else 
                    if (tcmon == 'pcol'){ 
                        tcambio = valor * 3947,60 ;
                        
                    }else 
                    if (tcmon == 'euro'){
                        tcambio = valor * 0,85 ;
                    }else 
                    if (tcmon == 'lest')
                        tcambio = valor * 0,72 ;

            } else if(tmon == 'pmex'){
                    if (tcmon == 'dolar') { 
                        tcabmio == valor * 0,050;
                    }else 
                    if (tcemon == 'pcol'){
                        tcabmio = valor * 197,94;
                    }else 
                    if (tcemon == 'euro'){
                        tcabmio = valor * 0,043 ;
                    }else 
                    if (tcemon == 'lest'){
                        tcambio = valor * 0,036 ;
                    }
                
            }else if (tmon == 'pcol' ){
                    if (tcmon == 'dolar'){ 
                        tcambio == valor * 0,00025 ;    
                    }else 
                    if (tcmon == 'pmex'){
                        tcambio == valor * 0,0050 ;
                    }else 
                    if (tcmon == 'euro'){
                        tcambio = valor * 0,00022 ;
                    }else 
                    if (tcemon == 'lest'){
                        tcambio = valor * 0,00018 ;
                    }

            }else if (tmon == 'euro'){
                    if (tcmon == 'dolar'){
                        tcambio = valor * 1,17;
                    } else
                    if (tcmon == 'pmex'){
                        tcambio = valor * 23,42 ;
                    }else 
                    if (tcmon == 'pcol'){
                        tcambio = valor * 4639,05 ;
                    }else 
                    if (tcmon == 'lest'){
                        tcabmio = valor * 0,85 ; 
                    }

            }else if (tmon == 'lest'){
                    if(tcemon == 'dolar'){
                        tcambio = valor * 1,39;
                    }else
                    if (tcemon == 'pmex'){
                        tcambio = valor * 27,67 ;
                    }else 
                    if (tcemon == 'pcol'){
                        tcambio = valor * 5481,97 ;

                    }else
                    if (tcemon == 'euro') {
                        tcambio = valor * 1,18 ;
                    }

            } console.log (tcambio) 
            return tcambio ;

}
