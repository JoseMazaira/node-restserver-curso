/**
 * Configuración
 */


// =================
//  Puerto
// =================

process.env.PORT = process.env.PORT || 3000;


// =================
//  Entorno
// =================


process.env.NODE_ENV = process.env.NODE_ENV || 'dev'



// ==========================================
//  Vencimiento del token de autenticación
// ==========================================
// 60 SEGUNDOS 60 MINUTOS 24 HORAS 30 DÍAS

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30


// ============================
//  SEED de autenticación
// ============================

process.env.NODE_SEED = process.env.NODE_ENV || 'este-es-el-seed-desarrollo'



// =================
//  Base de datos
// =================

let urlDB

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI
}

process.env.URL_DB = urlDB