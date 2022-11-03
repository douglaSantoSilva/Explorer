require("express-async-errors")
const uploadConfig = require("./config/upload")
const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppsError");
const express = require("express");
const routes = require("./routes");
const cors = require('cors')

migrationsRun();

const app = express();
app.use(cors())
app.use(express.json());
app.use(routes);

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))
app.use(( error, request, response, next) => {

  if(error instanceof AppError) { 
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  //debug if necessary
  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });

});
//address
const PORT = 3333;

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));