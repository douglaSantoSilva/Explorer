const { AppErrors } = require("../utils/AppErrors")
const { hash, compare } = require('bcryptjs')
const  knex  = require("../database/knex")
class UsersController {

  async create(request, response) {
    const { email, name, password} = request.body

    if(!name || !password || !email) {
      throw new AppErrors("O nome, senha e password é obrigatório!")
    }

    const verifyEmailExist = await knex.select("email").from("users").where({email: email})

    if(verifyEmailExist.length > 0) {
      throw new AppErrors("Este e-mail já está cadastrado.", 401)
    }

    const hashedPassword = await hash(password, 8)
    await knex("users").insert({name, email,password: hashedPassword})
    
    return response.status(201).json({email, name, password})
  }

  async update(request, response) {
    const { name, email, password, old_password} = request.body
    const user_id = request.user.id
    
    const user = await knex("users").where({id: Number(user_id)}).first()
    
    if(!user) {
      throw new AppErrors("usuário não encontrado", 401)
    }

    const withUpdateEmail = await knex("users").where("email", email).first()
   
    if(withUpdateEmail && withUpdateEmail.id !== user.id) {
      throw new AppErrors("E-mail já cadastrado", 401)
    }

    user.name = name  ?? user.name; 
    user.email = email ?? user.email;


    if(password && !old_password) {
      throw new AppErrors("necessário digitar a senha antiga.", 401)
    }

    if(password && old_password) {

      const matchPassword = await compare(old_password, user.password)

      if(!matchPassword) {
        throw new AppErrors("A senha antiga está incorreta.", 401)
      }

      //Nessa parte poderia haver senha com digitos mínimos.
      user.password = await hash(password, 8)
    }

    await knex("users")
    .where({id: Number(user_id)})
    .update({
      name: user.name,
      email: user.email, 
      password: user.password
    })
 
   return response.json (201)
  }
}


module.exports =  { UsersController } 