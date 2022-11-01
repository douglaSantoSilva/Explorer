const { Router } = require("express");
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();

const notesController = new NotesController();

//colocando o middleware em todas as rotas com o use
notesRoutes.use(ensureAuthenticated)
notesRoutes.get("/", notesController.index);
notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;