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
      throw new AppErrors("Este e-mail já está cadastrado.")
    }

    const hashedPassword = await hash(password, 8)
    await knex("users").insert({name, email,password: hashedPassword})
    
    return response.status(201).json({email, name, password})
  }

  async update(request, response) {
    const { name, newEmail, password, oldPassword } = request.body
    const { id } = request.params
    
    if(id) {
    // User not find
    const user = await knex.select("id", "name", "email", "password").from("users").where({id: id})
    const userNotExist = user.length <= 0 ? true : false
    
    if(userNotExist) {
      throw new AppErrors("Usuário não encontrado")
    }

    //userExist
    const userObject = user[0]
    const emailIsDifferentFromUserId = newEmail != userObject.email && newEmail
    
    //Change Your Email
    if(emailIsDifferentFromUserId) {
      
      const emailCompare = await knex.from("users").where({email: newEmail})
      const verifyEmailExist = emailCompare.length > 0 ? true : false

      if(verifyEmailExist) {
        throw new AppErrors("Este e-mail já está cadastrado.")
      }
    }

    //Must Have Old Password
    if(password && !oldPassword) {
      throw new AppErrors("Your old password is required.")
    }

    //If has change the Password
    if(password && oldPassword) {
      const userOldPasswordIsTrue = await compare(oldPassword, userObject.password)
      console.log(userOldPasswordIsTrue)
      if(!userOldPasswordIsTrue) {
        throw new AppErrors("The old password is incorrect.")
      }

    const hashedPassword = await hash(password, 8)
    //update Password
      await knex('users').where({id: id}).update({password: hashedPassword})
    }

    userObject.name = name ?? userObject.name
    userObject.email = newEmail ?? userObject.email

    //Then update name and email
    await knex('users').where({id: id}).update({email: userObject.email, name: userObject.name})
    }
    
    response.json({message: "Usuário atualizado com sucesso!"})
  }


}


module.exports =  { UsersController } 