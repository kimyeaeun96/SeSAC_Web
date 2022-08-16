const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config // 이건 뭘까
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./User")(sequelize, Sequelize);  // 원래는 db.Visitor = require("./Visitor")(sequelize, Sequelize);
//const a = require("./Visior")
//const b = a(sequelize, Sequelize);

module.exports = db;