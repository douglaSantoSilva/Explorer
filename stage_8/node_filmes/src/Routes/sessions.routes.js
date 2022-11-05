const { Router } = require("express")
const sessionsRoutes = Router()

const { SessionsController } = require("../Controller/SessionsController")
const sessionsController = new SessionsController()

sessionsRoutes.post("/", sessionsController.create)

module.exports = { sessionsRoutes }