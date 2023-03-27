const dev = {
    db: {
        protocol: process.env.DEV_DB_PROTOCOL || 'mongodb:/',
        host: process.env.DEV_DB_HOST || 'localhost',
        port: process.env.DEV_DB_PORT || 27017,
        name: process.env.DEV_DB_NAME || 'DUCTRONG-PHAM'
    }
}

const pro = {
    db: {
        protocol: process.env.PRO_DB_PROTOCOL || 'mongodb+srv:/',
        host: process.env.PRO_DB_HOST || 'admin',
        port: process.env.PRO_DB_PORT || 'admin@cluster0.mvebh.mongodb.net',
        name: process.env.PRO_DB_NAME || 'DUCTRONG-PHAM'
    }
}

const config = { dev, pro }
const env = process.env.NODE_ENV || 'dev'

module.exports = config[env]