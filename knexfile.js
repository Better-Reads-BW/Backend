// Update with your config settings.

localPbConnection = {
  host: "localhost",
  database: "Database",
  user: process.env.DB_USERS,
  password: process.env.DB_PASS
};

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, 
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run('PRAGMA foreign_keys = ON', done);
    //   }
    // },
    connection: {
      filename: './database/reads.db3'
    },
    migrations: {
      directory: './database/migrations',
      tableName: "dbmigrations",
    },
    seeds: {
      directory: './database/seeds'
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || localPbConnection,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds'
    }
  }

};
