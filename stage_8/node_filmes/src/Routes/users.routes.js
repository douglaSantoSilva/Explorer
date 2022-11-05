const { Router } = require("express")
const usersRoutes = Router()

const { UsersController } = require("../Controller/UsersController") 
const usersController = new UsersController()
const { ensureAuthenticated } = require("../middlewares/ensureAuthenticated")
const uploadConfig = require("../configs/upload")
const multer = require("multer")
const upload = multer(uploadConfig.MULTER)
const { UserAvatarController } = require("../Controller/UserAvatarController")
const userAvatarController = new UserAvatarController()

usersRoutes.post("/", usersController.create)
usersRoutes.put("/", ensureAuthenticated, usersController.update)
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = { usersRoutes }