const knexConfiguration = {
    client: 'mysql',
    migrations: {
        tableName: 'knex_migrations',
        directory: `${ __dirname }/src/db/migrations`
      },
    connection: {
        host: 'localhost',
        user: 'centric',
        database: 'products',
        typeCast: function(field, next) {
            if (field.type == 'JSON') {
                return (JSON.parse(field.string()));
            }
            return next();
        }
    }
}

module.exports = knexConfiguration