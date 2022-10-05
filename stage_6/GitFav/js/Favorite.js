import { GithubUser } from "./GitHubUser.js"

export class Favorite {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
    
    GithubUser.search('maykbrito').then

    console.log(this.entries)

  }

  load() {
    this.entries = JSON.parse(localStorage.getItem
      ('@github-favorite:')) || []

    
  }

  save() {
    localStorage.setItem('@github-favorite:', JSON.stringify(this.entries))
  }


  async add(username){
    try{

      const userExist = this.entries.find(entry => entry.login === username)
    
      if(userExist) {
        throw new Error('Usuário já cadastrado!')
      }

      const user = await GithubUser.search(username)

      if(user.login === undefined) {
        throw new Error('usuário não encontrado!')
      }

      this.entries = [user, ...this.entries]
      this.update()
      this.save()

    } catch(error){
      alert(error.message)
    }
   
  }

  delete(user) {
    const filteredEntries =  this.entries
    .filter(entry =>  entry.login !== user.login)

    this.entries = filteredEntries
    this.update()
    this.save()
  }
}

export class FavoriteView extends Favorite {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector("table tbody")
    this.onAdd()
    this.update()
  }

  update() {
    this.removeAllTr()

    if(this.entries.length == 0) {
     return this.emptyRow()
    }
    
    this.removeRow()

    this.entries.forEach( user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user img').alt = `Logo ${user.name}`
      row.querySelector('.user a').href = `https:/github.com/${user.login}`
      row.querySelector('.user span').textContent = `/${user.login}`
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers
      row.querySelector('.remove').onclick = () => {
        const isOK = confirm('Tem certeza que deseja deletar essa linha?')
        if(isOK) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })

    
  }

  onAdd() {
    const addBottom = this.root.querySelector('.SearchAdd button')
    addBottom.onclick = () => {
      const { value } = this.root.querySelector('.Search input')
      this.add(value)
    }
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML =  `
    <td class="user">
      <img src="https:/github.com/douglaSantoSilva.png" alt="Logo User">
      <a href="https:/github.com/douglaSantoSilva" target="_blank">
        <p>Douglas Santos</p>
        <span>/douglaSantoSilva</span>
      </a>
    </td>
    <td class="repositories">
      123
    </td>
    <td class="followers">
      1234
    </td>
    <td class="remove">
      Remover
    </td>
  `
    return tr
  }

  emptyRow(){
   const createImg = document.createElement('div')
    const CreateTable = this.root.querySelector('.controlTable')

   createImg.innerHTML = `
    
    <div class="emptyTable">
      <div>
      <img src="./img/bigIcon.svg" alt="">
      <p>Adicione alguém a sua lista !</p>
      </div>
    </div>`

  
    CreateTable.append(createImg)
  }

  removeRow(){
    const removeRow = this.root.querySelector('div .controlTable')
    removeRow.remove
  }

  removeAllTr() {
  this.tbody.querySelectorAll('tr')
  .forEach(
    (tr) => {
      tr.remove()
    })
  }

  
}