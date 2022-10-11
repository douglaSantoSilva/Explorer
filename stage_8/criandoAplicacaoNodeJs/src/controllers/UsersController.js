const AppError = require("../utils/AppsError")

class UsersController {
  create(request, response){
    const { name, email, password} = request.body;

    if(!name){
      throw new AppError("Nome é obrigatório")
    }

    response.status(201).json({name, email, password});
  }

}

module.exports = UsersController;