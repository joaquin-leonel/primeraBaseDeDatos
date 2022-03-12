const dbconfig = require('../db/config');
const knex = require('knex')(dbconfig.mariaDB);

const singleProduct ={
    title:'procesador intel',
    price:'45000',
    thumbnail:'https://www.profesionalreview.com/wp-content/uploads/2018/09/Intel-Core-i9-2.jpg',
    id_number:'SKU4983483',
};

(async () =>{
    try{
       await knex('productos').insert(singleProduct);
       console.log('data ingresada');
    }
    catch(error){
        console.log(error);
        throw error;
    }
    finally{
       knex.destroy(); 
    }
})();