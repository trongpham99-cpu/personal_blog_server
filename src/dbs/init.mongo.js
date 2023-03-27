const mongoose = require('mongoose')
const { db: { host, name, port, protocol } } = require('../configs/mongo/index');
class Database {

    constructor() {
        this.connect()
    }

    connect(type = 'mongodb') {
        //for dev
        const isDev = process.env.NODE_ENV === 'dev'
        if (isDev) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }

        const CONNECTION_STRING = `${protocol}/${host}:${port}/${name}`
        // console.log(`Connection String :::: ${CONNECTION_STRING}`)

        mongoose.connect(CONNECTION_STRING, {

        }).then(_ => console.log(`Connected MongoDB::::${name} Success!`))
            .catch(err => console.log(`Error Connect`))
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMongoDB = Database.getInstance()
module.exports = instanceMongoDB