const { Router } = require("express")
const notesRoutes = Router()

const { NotesController } = require("../Controller/NotesController")
const notesController = new NotesController()
const { ensureAuthenticated } = require("../middlewares/ensureAuthenticated")


notesRoutes.use(ensureAuthenticated)

notesRoutes.post("/", notesController.create)
notesRoutes.get("/:id", notesController.show)
notesRoutes.get("/", notesController.index)
notesRoutes.delete("/:id", notesController.deleteNote)



module.exports = { notesRoutes }