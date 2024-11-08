require('dotenv').config;

module.exports={
    DATABASE_URL:process.env.MONGODB_URL,
    JWT_CODE: process.env.JWT_SECRET,
    PORT:process.env.PORT_URL
}