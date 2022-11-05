const knex = require("../database/knex")
const { AppErrors } = require("../utils/AppErrors")
const { DiskStorage } = require("../providers/DiskStorage")
const diskStorage = new DiskStorage()

class UserAvatarController {
  async update(request, response) {
    const user_id = request.user.id
    const avatarFileName = request.file.filename

    const user = await knex("users").where({id: user_id}).first()

    if(!user) {
      throw new AppErrors("Somente usuários autenticados podem mudar o avatar.", 401)
    }

    if(user.avatar) {
      diskStorage.deleteFile(user.avatar)
    }

    const filename = await diskStorage.saveFile(avatarFileName)
    user.avatar = filename

    await knex("users").update(user).where({id: user_id})

    return response.json(user)
  }
}

module.exports = { UserAvatarController }