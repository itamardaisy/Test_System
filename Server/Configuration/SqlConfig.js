// config for your database
module.exports = {
    user: 'Itamar',
    password: 'qwerty',
    server: 'localhost',
    database: 'ReactLoginEx',
    pool: {
        min: 2
    },
    options: {
        encrypt: true,
        instanceName: 'SQLEXPRESS'
    }
};