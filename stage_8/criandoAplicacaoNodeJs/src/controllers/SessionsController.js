const knex = require('../database/knex')
const AppsError = require('../utils/AppsError')
const { compare } = require('bcryptjs')
const authConfig = require('../config/auth')
const { sign } = require('jsonwebtoken')

class SessionsController {
  async create(request, response) {
    const {email, password} = request.body

    const user = await knex('users').where({email: email}).first()

    if(!user) {
      throw new AppsError("E-mail e/ou senha incorreta", 401)
    }

    const passwordIsMatched = await compare(password, user.password)

    if(!passwordIsMatched) {
      throw new AppsError("E-mail e/ou senha incorreta", 401)
    }

    const {secret, expiresIn} = authConfig.jwt
    const token = sign({}, secret,{
      subject: String(user.id),
      expiresIn
    })

    return response.json({user, token})
  }
}

module.exports = SessionsController