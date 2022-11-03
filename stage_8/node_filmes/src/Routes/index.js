const { Router } = require("express")

const routes = Router()
const { usersRoutes }  = require("./users.routes")
const { notesRoutes } = require("./notes.routes")
const { sessionsRoutes } = require("./sessions.routes")


routes.use("/users", usersRoutes)
routes.use("/notes", notesRoutes)
routes.use("/sessions", sessionsRoutes)

module.exports = { routes }