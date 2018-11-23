// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Vencimiento del token
// ============================
process.env.CADUCIDAD_TOKEN =  60 * 60 * 24 * 30;

// ============================
//  Seed semilla
// ============================


process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

process.env.SEED = process.env.SEED || 'este-es-el-secret';

let urlDB;

if( process.env.NODE_ENV === 'dev'){
     urlDB = 'mongodb://localhost:27017/cafe'
}else{
     urlDB = process.env.MONGO_URI;
}

process.env.urlDB = urlDB;

// ============================
//  Google client id
// ============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '656574692220-9t7vtsvphvcrdjff03dfct37hc8dag52.apps.googleusercontent.com';
