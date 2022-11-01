const { verify } = require('jsonwebtoken')

const AppsError = require('../utils/AppsError')

const authConfig = require('../config/auth')

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization

  if(!authHeader) {
    throw new AppsError("JWT token não informado", 401)
  }

  const [, token] = authHeader.split(" ")

  try{
    const { sub: user_id } = verify(token, authConfig.jwt.secret)
    
    request.user = {
      id: Number(user_id)
    }

    return next()
  }catch {
    throw new AppsError("JWT token invalid", 401)
  }
}

module.exports = ensureAuthenticated