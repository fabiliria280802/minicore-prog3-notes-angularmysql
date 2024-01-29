//imports necesarios
import mysql from "mysql";
import { Sequelize } from "sequelize";

//Debes importar tus keys que estan etiquetadas como keys-example
import keys from "../keys";

const sequelize = new Sequelize(keys.database,keys.user, keys.password, {
  host: keys.host,
  dialect: "mysql",
});

export default sequelize;