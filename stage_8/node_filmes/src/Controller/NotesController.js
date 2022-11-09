const { AppErrors } = require("../utils/AppErrors")
const  knex  = require("../database/knex")

class NotesController {
  async create(request, response) {
    const { title, description, rating , tags } = request.body
    const user_id = request.user.id

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

    response.status(201).json({message: "Nota criada com sucesso"})
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
  const { title, tags } = request.query
  const user_id  = request.user.id
  
  let notes;

  if(tags) {
    const filterTags = tags.split(",").map(tag => tag.trim())
    notes = await knex("movie_tags")
    .select([
      "movie_notes.id",
      "movie_notes.title",
      "movie_notes.user_id"
    ])
    .where("movie_notes.user_id", "=", user_id)
    .whereLike("movie_notes.title", `%${title}%`)
    .whereIn("name", filterTags)
    .innerJoin("movie_notes", "movie_notes.id", "movie_tags.note_id")
    .groupBy("notes.id")
    .orderBy("movie_notes.title")
    
  }else {
     notes = await knex("movie_notes")
  .where({user_id})
  .whereLike("title", `%${title}%`)
  .orderBy("title")
  }

  const userTags = await knex("movie_tags").where({user_id})
  const notesWithTags = notes.map(note => {
    const noteTags = userTags.filter(tag => tag.note_id === note.id)
    return {
      ...note,
      tags: noteTags
    }})

  return response.json({notesWithTags})
    }

  async deleteNote(request,response) {
    const { id } = request.params

    await knex("movie_notes").where({ id }).delete()
    
    return response.json()
  }


 
}

module.exports = { NotesController }