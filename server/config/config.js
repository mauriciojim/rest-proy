// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

let urlDB;

// if( process.env.NODE_ENV === 'dev'){
//     urlDB = 'mongodb://localhost:27017/cafe'
// }else{
     urlDB = 'mongodb://cafe-user:123456X@ds263493.mlab.com:63493/cafe'
// }

process.env.urlDB = urlDB;