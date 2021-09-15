class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        console.log('SIGUIENTE USUARIO....');

        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        console.log('El nombre completo es....')
        console.log(`${this.nombre} ${this.apellido}`);
    }

    addMascota(mascotaNueva){
        console.log('Ahora tmb tengo a....');
        this.mascotas.push(mascotaNueva);
        console.log(mascotaNueva);
    }

    countMascota(){
        console.log('CANTIDAD DE MASCOTAS.....');
        console.log(this.mascotas.length);
        return this.mascotas.length
    }

    addBook(id,nombre) {
        console.log('Agregar Libro....');
        this.libros.push({
            id: id, nombre: nombre
        });
    }

    getBooksNames(){
        console.log('Los nombres de mis libros son....');
        let nombres = [];
        this.libros.forEach(libros => {
            nombres.push(libros.nombre);  
        });
        return(`${this.libros.length >1 ? 'Los libros de' : 'El libro de'} ${this.nombre} ${this.apellido} 
        ${this.libros.length >1 ? 'son:' : 'es'} ${nombres}.`)
    }
}

const libros = [{}, ];

const mascotas = [{}, ];

const l = new Usuario('Lucas',
    'Otero',
    [{id:0, nombre: 'Harry Potter'},{id:1, nombre:  'El senor de los anillos'}],
    ['Simona','Luke']);
console.log(l);

l.getFullName();
l.addMascota('Carpinchuski');
l.countMascota();
l.addBook(100,'Matrix');
console.log(l.getBooksNames());


const j = new Usuario('Julieta',
    'Confalonieri',
    [{id:0, nombre: 'Blancanieves'},{id:1,nombre:  'Alicia en el pais de las maravillas'}],
    ['Simona','Luke']);
console.log(j);
j.getFullName();

const lo = new Usuario('Lorena',
    'Miranda',
    [{id:0, nombre: 'Blancanieves'},{id:1,nombre:  'La Mujer maravilla'}],
    ['Emma','Vigo','Max']);
console.log(lo);
lo.getFullName();

