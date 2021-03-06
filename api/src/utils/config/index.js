require('dotenv').config();

module.exports = {
    dbUser : procces.env.DB_USER || 'postgress',
    dbName : process.env.DB_NAME || 'countries', 
    dbPort : process.env.DB_PORT || '5432',   
    dbHost : process.env.DB_HOST || 'localhost', 
    dbPassword : process.env.DB_PASSWORD || '1234',
    host : process.env.HOST || 'localhost',
    PORT : process.env.PORT || 3001

}