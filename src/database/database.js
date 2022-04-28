import Sequelize from "sequelize";
export const sequelize = new Sequelize("restapi", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

// export const sequelize = new Sequelize(
//   "postgres://postgres:root@localhost:3000/restapi"
// );
