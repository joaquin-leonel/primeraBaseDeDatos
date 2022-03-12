const dbconfig = require('../db/config');
const knex = require('knex')(dbconfig.sqlite);

(async () =>{
    try{
        const tableExist = await knex.schema.hasTable('mensajes');
        if(!tableExist){
            await knex.schema.createTable('mensajes', (table) =>{
                table.increments('id');
                table.string('autor').notNullable();
                table.string('texto').notNullable();
                table.string('fyh').notNullable();
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