(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  const list_Emails: Array<string> = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];

  console.log(list_Emails);

  //Lista de compras de un carrito
  const shopping_List: Array<Object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(shopping_List);
  

  //funcion para sumar mas 3 a un numero y retornarlo
  const sum_three = (a: number): number => {
    return  a+ 3;
  }

  console.log(sum_three(2));
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capi(w: string): string {
    w=w.toLowerCase();    
    const c = w.charAt(0).toUpperCase().toString().concat(w.substring(1, w.length));
    return c;
  }

  console.log(capi("capricorn"));
  
  //variable que alerta en caso de que algun evento suceda
  let canOpen: boolean = false;

    if(canOpen) console.log('event');

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  let c: boolean = true;

  if(c) console.log('welcome');
  

  //variable para hallar el promedio de 3 numeros
  const average: number = (1 + 2 + 3) / 3;

      console.log(average);
  
  //variable que almacena el valor de PI
  const pi: number = 3.141592654;

      console.log(pi);
  

  //variabel que controla si un archivo es modificable 
  let canEditFile: boolean = false;

      if(canEditFile) console.log('edit this file?');
  
  //variable para almacenar el valor de e
  const value_E: number = 2.718281828; 
     console.log(value_E);

})();