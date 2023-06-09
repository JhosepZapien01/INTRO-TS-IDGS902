//Funciones 
function suma(a:number,b:number):number{
    return a+b
}

const sumaflecha=(a:number,b:number):number =>
{
    return a+b
}
function multiplicar(numero1:number,_numero2?:number,base:number=2):number
{
    return numero1*base
}
const resultado2=multiplicar(5,10)
const  resultado=suma(3,9)
interface Persona2{
    nombre:string,
    edad:number,
    grupo:()=>void; 
}
function UTL(alumno:Persona2,_cuatrimestre:number):void
{
    alumno.edad = 23
    console.log(alumno)
}
const NuevoAlumno:Persona2=
{
    nombre:'Aqua',
    edad:24,
    grupo()
    {
        console.log('IDGS123',this.edad)
    }
}
UTL(NuevoAlumno,44)
console.log(resultado2)

const fucSumar=function(n1:number,n2:number):number{
    return n1+n2
} 
console.log(fucSumar(4,9))

//funcion con parametros opcionales
function calcular(n1:number, n2:number,n3?:number):number{
    if(n3)
     return n1+n2+n3;
    else 
     return n1+n2;
}
console.log(calcular(3,2,5))
console.log(calcular(3,2))

//Parametros Rest en funciones 
function  calcular2(...valores:number[]){
    let sum =0;
    for(let x=0;x<valores.length;x++)
     sum=valores[x];
     return suma;
} 
console.log(calcular2(10,2,3,4))
console.log(calcular2(1,2))