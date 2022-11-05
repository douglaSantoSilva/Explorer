const { verify } = require("jsonwebtoken")
const { AppErrors } = require("../utils/AppErrors")
const authConfig = require("../configs/auth")

function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization

  if(!authHeader) {
    throw new AppErrors("TWJ não informado.", 401)
  }

  const [, token] = authHeader.split(" ")

 try{
  const {sub: use_id } = verify(token, authConfig.jwt.secret)

  req.user = {
    id: Number(use_id)
  }

  next()
 }catch{
  throw new AppErrors("JWT token invalid.", 401)
 }  
}

module.exports = { ensureAuthenticated }