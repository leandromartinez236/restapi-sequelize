import app from "./App.js";
import { sequelize } from "./database/database.js";

const main = async () => {
  try {
    await sequelize.sync({ force: true });
    app.listen(3000, () => console.log("Server running on port", 3000));
  } catch (error) {
    console.error("Ocurrio un error al iniciar", error);
  }
};

main();
