const { Router } = require("express");

// is a class so you need to put the const
const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

function myMiddleware(request, response, next){

  console.log("Passei Pelo midleware");
  next()
}

const usersController = new UsersController();

usersRoutes.post("/", myMiddleware, usersController.create);
usersRoutes.put("/:id", usersController.update);
//exportando para quem quiser utilizar esse arquivo
module.exports = usersRoutes;