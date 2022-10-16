const { AppErrors } = require("../utils/AppErrors")
const { hash } = require("bcryptjs")
const  knex  = require("../database/knex")
class UsersController {

  async create(request, response) {
    const { email, name, password} = request.body
    
    const verifyEmailExist = await knex.select("email").from("users").where({email: email})

    if(verifyEmailExist.length > 0) {
      throw new AppErrors("Este e-mail já está cadastrado.")
    }

    const hashedPassword = await hash(password, 8)
    await knex("users").insert({name, email,password: hashedPassword})
    
    return response.status(201).json({email, name, password})
  }

  async update(request, response) {
    const { name, email, password, oldPassword } = request.body
    const { id } = request.params

    const user = await knex.select().table("users").where({id: id})
    const userNotExist = user.length <= 0 ? true : false

    if(userNotExist) {
      throw new AppErrors("Usuário não encontrado")
    }

    response.json({name, email, password})
  }


}


module.exports =  { UsersController } 