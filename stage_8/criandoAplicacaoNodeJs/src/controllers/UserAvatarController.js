const knex = require("../database/knex")
const AppError = require('../utils/AppsError')
const DiskStorage = require("../providers/DiskStorage")

class UserAvatarController {
  async update(request, response){
    const user_id = request.user.id
    const avatarFileName = request.file.filename
    console.log(avatarFileName)
    const diskStorage = new DiskStorage()

    const user = await knex("users")
    .where({id: user_id}).first()

    if(!user) {
      throw new AppError("Somente usuários autenticados podem mudar o avatar.", 401)
    }

    if(user.avatar) {
      await diskStorage.deleteFile(user.avatar)
    }
    console.log(user)
    const filename = await diskStorage.saveFile(avatarFileName)
    user.avatar = filename
    console.log(user)
    await knex("users").update(user).where({id: user_id})

    return response.json(user)

    return
  }
}

module.exports = UserAvatarController