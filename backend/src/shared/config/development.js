module.exports = {
  env: "development",
  PORT: process.env.PORT || "5000",
  DB: {
    username: "postgres",
    password: "1234",
    database: "cardb",
    host: "localhost",
    dialect: "postgres",
    port: 5435,
    logging: false,
    //schema: "md",
    //searchPath: "md",
    dialectOptions: {
      prependSearchPath: true,
    },
  },
  // logging: {
  //   http: {
  //     serverUrl: "http://localhost:5341"
  //   }
  // }
};
