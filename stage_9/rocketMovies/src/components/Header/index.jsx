import { Container, Search, Profile, Logout } from './styles'

export function Header() {
 return(
  <Container>
    <h1>RocketMovies</h1>
    <Search placeholder='Pesquisar pelo título'/>
    <Profile to="/profile">
      <div>
        <strong>Douglas Santos</strong>
      <Logout>Sair</Logout>
      </div>
      <img 
      src="https://www.github.com/douglaSantoSilva.png" 
      alt="Foto do Usuário" />
    </Profile>
  </Container>
 )
}