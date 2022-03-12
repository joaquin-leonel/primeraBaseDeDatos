const dbconfig = require('../db/config');
const knex = require('knex')(dbconfig.mariaDB);

class ContenedorMemoria {
    constructor() {
        this.id = 0
    }

    async listarAll() {
        // return [...this.elementos]
        
        try{
            const productos = await knex.from('productos').select('*');
            console.log(productos);
            return productos;   
        }
        catch(error){
            console.log(error);
            throw error;
        }
        finally{
        //    knex.destroy(); 
        }
    }

    async guardar(elem){
        try{
            await knex('productos').insert(elem);
            console.log('data ingresada');
            return elem;
         }
         catch(error){
             console.log(error);
             throw error;
         }
         finally{
            //knex.destroy(); 
         }
     
    }
    // guardar(elem) {
    //     const newElem = { ...elem, id: ++this.id }
    //     this.elementos.push(newElem)
    //     return newElem
    // }

    // guardar() {
    //     const newElem = { ...elem, id: ++this.id }
    //     this.elementos.push(newElem)
    //     return newElem
    // }

    listar(id) {
        const elem = this.elementos.find(elem => elem.id == id)
        return elem || { error: `elemento no encontrado` }
    }

    actualizar(elem, id) {
        const newElem = { id: Number(id), ...elem }
        const index = this.elementos.findIndex(p => p.id == id)
        if (index !== -1) {
            this.elementos[index] = newElem
            return newElem
        } else {
            return { error: `elemento no encontrado` }
        }
    }

    borrar(id) {
        const index = this.elementos.findIndex(elem => elem.id == id)
        if (index !== -1) {
            return this.elementos.splice(index, 1)
        } else {
            return { error: `elemento no encontrado` }
        }
    }

    borrarAll() {
        this.elementos = []
    }
}

module.exports = ContenedorMemoria
