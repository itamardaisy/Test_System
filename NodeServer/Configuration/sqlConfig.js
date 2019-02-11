    // config for your database
    module.exports = {
        user: 'Itamar',
        password: 'qwerty',
        server: 'localhost',
        database: 'TestingSystemDB',
        pool:{
            min:2
        },
        options:{
            encrypt: true,
            instanceName: 'SQLEXPRESS'
        }
    };