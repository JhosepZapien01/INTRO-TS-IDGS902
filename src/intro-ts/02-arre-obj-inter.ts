let mascotas = ['Perro','Gato',100,true]

//let tem:(boolean|number|string)[]=['aaaa','']
let nombres: string[]=['Miku','Albedo','Aqua']

interface Persona {
    nombre:string,
    grupo:string,
    edad:number,
    materias:string[];
    activo?:string
}
const alumno:Persona={
    nombre:'Mai',
    grupo:'IDGS123',
    edad:23,
    materias:['Español']
};
alumno.activo = "Inscrito"
console.log(alumno)
//---------------------------------------------------------------------------------------------------------------------------------------
let vector1:Array<number>=[9,8,7,6]
vector1.push
vector1[1]=22
for(let tem of vector1)
 console.log(tem)

 let tem:(number|string)[]=[]
 tem.push('mario')
 tem.push(123)

 ///--------------------------------------------
 interface Alumno{
    matricula?:number;
    nombre:string;

 }