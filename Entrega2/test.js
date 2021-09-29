const Contenedor = require('./Contenedor......');

const contenedor = new Contenedor ('productos.json');

console.log(contenedor);

const miProducto = {
     nombre: 'lavandina',
     precio: 5,
};

const main = async () => { 
    // const id = await contenedor.save(miProducto);
    // console.log(id);

    // const list = await contenedor.getAll();
    // console.log(list);

    // await contenedor.deleteAll();
    
};

main();


