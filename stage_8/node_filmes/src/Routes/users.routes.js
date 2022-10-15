const { Router } = require("express")
const usersRoutes = Router()

const { UsersController } = require("../Controller/UsersController") 
const usersController = new UsersController()


usersRoutes.post("/", usersController.create)


module.exports = { usersRoutes }