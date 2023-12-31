const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session);

module.exports = function (app) {
  app.set('trust proxy', 1) // trust first proxy
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }

    store: new MySQLStore({
      connectionLimit: 100,
      host: '172.17.0.1', // bridge, host: 127.0.0.1
      // host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'qlbh',
      charset: 'utf8mb4_bin',
      schema: {
        tableName: 'sessions',
        columnNames: {
          session_id: 'session_id',
          expires: 'expires',
          data: 'data'
        }
      }
    }),
  }))
};
