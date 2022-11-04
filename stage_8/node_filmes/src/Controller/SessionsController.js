const knex = require("../database/knex")
const { AppErrors } = require("../utils/AppErrors")
const { compare } = require("bcryptjs")
const { sign } = require("jsonwebtoken")
const authConfig = require("../configs/auth")

class SessionsController {
  
  async create(req, res) {
    const { password, email } = req.body

  const user = await knex("users").where({email}).first()
  
  if(!user) {
    throw new AppErrors("E-mail e/ou senha incorretos.")
  }

  const passwordMatch = await compare(password, user.password)

  if(!passwordMatch) {
    throw new AppErrors("E-mail e/ou senha incorretos.")
  }

  const {secret, expiresIn} = authConfig.jwt
  
  const token = sign({}, secret, {
    subject: String(user.id),
    expiresIn
  })

    return res.json(token)
  }

}

module.exports = { SessionsController }