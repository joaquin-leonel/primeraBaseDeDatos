const dbconfig = require('../db/config');
const knex = require('knex')(dbconfig.mariaDB);

(async () =>{
    try{
        const tableExist = await knex.schema.hasTable('productos');
        if(!tableExist){
            await knex.schema.createTable('productos', (table) =>{
                table.increments('id');
                table.string('title').notNullable().defaultTo('sin nombre');
                table.integer('price').unsigned();
                table.string('thumbnail').notNullable().defaultTo('sin foto');
            });
            console.log('tabla creada');
        } else{
            console.log('table ya creada');
        }
      
    }
    catch(error){
        console.log(error);
        throw error;
    }
    finally{
       knex.destroy(); 
    }
})();