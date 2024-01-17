//Variables 
let mensajeDescricion="Esta aplicación creada por John Monroy, para la primera entrega simula la venta de carnets.\nEn donde se capturan los datos del cliente, el material de los carnets, el número de unidades.\nAunado a ello, estima el valor del pedido (en donde a más unidades menor es el costo de cada unidad), establece si el cliente realiza o no el pago, genera un código para cada carnet y genera una factura luego de que se valida el pago del cliente además de los valores necesarios para su generación"
let mensajeBienvenida = "Módulo de pedidos  \nPor favor elija una opción\n 1. Datos Cliente\n 2. Material\n 3. Cantidad llaves de acceso\n 4. Valor del pedido y pago\n 5. Generación de las llaves de acceso\n 6. Factura\n 7. Salir"
let nameClient= " " // nombre del cliente
let nDocumento= " "// número de documento
let nCarnets=0 // número de carnets
let material=0// Material del carnet acceso 0=>Sin definir 1=> plástico 2=>cartón 
let impuestos=0.19//% del impuesto
let pago ="n" // cliente realiza el pago del producto n=>no s=>si
let precio=0

alert(mensajeDescricion)
// Menú principal (case)
menu()

//menu
function menu(){
    let option = prompt(mensajeBienvenida)  
    console.log("Selecciono "+option)
    verificacionMenu(option)    
}
/// funciones asociadas

//Verificación dato de ingreso al menú
function verificacionMenu(option){    
    //alert ("ingreso a verificacion menu con la option "+option)
    //option1=parseInt(option)
    if(option <=7 && option>=0 ){
        //alert ("La opción "+option+" es valida")
        console.log(option)
        switch(option){

            case "0": let option = prompt(mensajeBienvenida);
                break;
            case "1":   client();//datos del cliente
                break;
            case "2":   seleccion();//material 
                break;
            case "3":   unidades();//Cantidad
                break;
            case "4": valor ();//valor del pedido
                break;    
            case "5": llaves();//
                break;
            case "6": factura();//
            break;    
            case "7": salir();
            break;
            default: 
                alert("El valor ingresado no es válido");
                break;
        }
        

    }else {
        alert("no es una opcion valida,\npor favor intente nuevamente")
        menu()
    }

}

// Datos usuario
function client(){
    nameClient=prompt("Ingrese el  nombre del cliente")
    nDocumento=prompt("Ingrese el número de identificacion")
    menu()
}
// Material del carnet
function seleccion(){
    material=parseInt(prompt("seleccione el material del carnet\n1. Plástico\n2. Cartón"))
    if(1<= material  && material<=2){
        alert("El material de la llave fue seleccionado correctamente!")
        menu()

    }else {
        alert("Selección incorrecta\nPor favor intente nuevamente")
        menu()
    }

}
//Número de unidades
function unidades(){
    nCarnets=parseInt(prompt("Ingrese el número de unidades que el cliente desea comprar"))
    console.log("el número de llaves es "+nCarnets)
    if(Number.isNaN(nCarnets)){
        alert("El valor ingresado no es un número, por favor intente nuevamente.")
       
    } 
    menu()
}
//Valor del pedido 
function valor(){
    
    if(nameClient==" "){ 
        alert("Cliente no ingresado\npor favor ingrese el cliente")
        menu()
    }
    if(nDocumento==" "){ 
        alert("Documento del cliente no ingresado\npor favor ingrese el documento de identificación del cliente")
        menu()
    }
    if(material==0){ 
        alert("El material no ha sido seleccionado\npor favor seleccione el material")
        menu()
    }
    if(nCarnets<=0){ 
        alert("El números de llaves es cero!, \npor favor ingrese una cantidad")
        menu()
    }
    
    if(nCarnets<=1000){
        precio =1000
    }
    if(nCarnets<500){
        precio =1200
    }
    if(nCarnets<250){
        console.log("menos de 250")
        precio =1500
    }
    if(material==1){
        precio=precio+300
    }
    console.log("El precio de cada llave es "+precio)
    let total= parseFloat(precio*nCarnets)*(1.0+impuestos)
    
    console.log("total "+total)
    alert ("El valor de cada llave es de "+precio+"\ny  total a pagar luego impuestos de las  "+nCarnets+" llaves  es: $"+total)
    if(nCarnets>0){
        pago=prompt("El cliente realiza el pago\n ingrese s para Si n para no")
    }
    
    if(pago=="S" || pago=="s"){
        pago="s"
    }else{pago="n"}
    menu()
}
//Generación de los codigos de las llaves de acceso
function llaves(){
    
    
    let n=0
    let cod="\n"
    let i=nCarnets+1
    
    

    while(n<nCarnets)
    {
        n++
        i--
        let min=0
        let max=nCarnets
        let random=0
        function getRandomInt(min,max) {
            
            random= parseInt(Math.floor(Math.random() * max*10));
        }
        getRandomInt(min,max)      

        cod=cod+"\n"+n+"-"+random+"-"+i

    }
    if(pago =="n"){
        //n=nCarnets
        alert("El pago no ha sido realizado y no se pueden generar los códigos de las llaves de acceso")
    }else{
        alert("los cod son"+cod)
    }
    

    menu()

}
//factura
function factura(){
    if(pago =="n"){
        //n=nCarnets
        alert("El pago no ha sido realizado y no se pueden generar la factura")
        menu()
    }


    // crea un nuevo objeto `Date`
    var today = new Date();
    // obtener la fecha y la hora
    var now = today.toLocaleString();
    console.log(now);

    let linea="\n-------------------------------------------------------------\n"

    alert("ingreso a factura")
    let head ="                                   Efectos SA"+linea+"Sucursal: Colombia Av Siempre Vivas N 1-23"+linea+"Fecha de expedición: "
    head=head+now+"\nCliente: "+nameClient+"\nN Documento: "+nDocumento+linea;
    //head=head+"Material | Cantidad  | Valor Uni | Impuesto | Total\n"
    

    if(material==1){
        head=head+"Material: Plástico \n"
    }else{head=head+"Material: Cartón   \n"}
    head=head+"Cantidad :"+nCarnets+"\nValor Unitario: "+precio+"\nSub total"+nCarnets*precio+"\nImpuesto 19%: "+parseFloat(nCarnets*precio*0.19)
    head=head+linea+"\nTotal: "+parseFloat(1.19*nCarnets*precio)+linea

    alert(head)

    menu()
}

function salir(){
    alert("Que tenga un buen día")
}