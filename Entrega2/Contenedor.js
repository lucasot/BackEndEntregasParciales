const fs = require('fs');
/*
class Contenedor{
    constructor (id,title,price){
        this.id = id;
        this.title = title;
        this.price = price;
        console.log('constructor:', this);
    }
}*/
class Contenedor {
    constructor(file) {
        this.file = file;
        console.log('constructor: ', this);
    }

    async save(producto) {
        console.log('producto: ', producto);

        try {
            const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');

            console.log(contenido);
            let mascotas = [];

            if (contenido === '') {
                producto.id = 1;
                productos.push(producto);
            } else {
                const listaDeProducto = JSON.parse(contenido);
                producto.id = listaDeProducto[listaDeProducto.length - 1].id + 1;
                listaDeProducto.push(producto);
                productos = listaDeProducto;
            }

            const productosString = JSON.stringify(productos, null, 2);

            console.log('LISTA DE PRODUCTOS......... ', productosString);

            await fs.promises.writeFile(`./${this.file}`, productosString);

            return producto.id;
        } catch (error) {
            console.error('Error: ', error);
        };
    }

    async getAll() {
        try {
            const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
            const listaDeProducto = JSON.parse(contenido);
            return listaDeProducto;
        } catch (error) {
            console.error('Error:..........', error);
        };
    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(`./${this.file}`, '');
        } catch (error) {
            console.error('Error:..........', error);
        };
    }
}

module.exports = Contenedor;