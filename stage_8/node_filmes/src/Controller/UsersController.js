class UsersController {

  create(request, response) {
    const { email, name, password} = request.body
    console.log(request.url, request.method)
    return response.json({email, name, password})
  }

}


module.exports =  { UsersController } 