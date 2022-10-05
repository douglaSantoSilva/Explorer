export default class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
    console.log(this.routes[routeName])
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({},'', event.target.href)

    this.handle()
  }
  
  handle(){
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404];
    fetch(route)
    .then(data => data.text())
    .then(html => {
      app.innerHTML = html
    })
  }

}
