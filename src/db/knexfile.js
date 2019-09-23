const knexConfiguration = {
    client: 'mysql',
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