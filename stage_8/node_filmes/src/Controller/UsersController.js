const { AppErrors } = require("../utils/AppErrors")

class UsersController {

  create(request, response) {
    const { email, name, password} = request.body
    if(!name) {
      throw new AppErrors("o nome é obrigatório!")
    }
    
    return response.json({email, name, password})
  }

}


module.exports =  { UsersController } 