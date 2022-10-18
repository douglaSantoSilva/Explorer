const { AppErrors } = require("../utils/AppErrors")
const  knex  = require("../database/knex")

class NotesController {
  async create(request, response) {
    const { title, description, rating , tags } = request.body
    const { user_id } = request.params

    if(!title || !description || !rating || !tags) {
      throw new AppErrors("Campos em branco")
    }

    const note_id = await knex("movie_notes").insert({
      title,
      description,
      user_id,
      rating
    })

    const tagsInsert = tags.map(name => {
      return {
        note_id,
        user_id,
        name
      }
    })

    console.log(tagsInsert)
    await knex("movie_tags").insert(tagsInsert)

    response.status(201).json({message: "its ok"})
  }

  async show(request, response) {
    const { id } = request.params

    const note = await knex("movie_notes").where({id}).first()
    const tags =  await knex("movie_tags").where({note_id: id}).orderBy("name")

    return response.json({
      ...note,
      tags
    })
  }

  async index(request, response) {
    const { user_id } = request.query

    const notes = await knex("movie_notes").where({user_id}).orderBy("title")

    return response.json({ notes })

  }

  async deleteNote(request,response) {
    const { id } = request.params

    await knex("movie_notes").where({ id }).delete()
    
    return response.json()
  }


 
}

module.exports = { NotesController }