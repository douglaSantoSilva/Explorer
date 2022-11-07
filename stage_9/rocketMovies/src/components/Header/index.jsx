import { Container, Search, Profile, Logout } from './styles'
import { useAuth } from '../../hooks/auth'
import { Link } from 'react-router-dom'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'

export function Header() {
  const { signOut, user } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  
  function handleSignOut() {
    signOut()
  }
  
  return(
  <Container>
    <h1>RocketMovies</h1>
    <Search placeholder='Pesquisar pelo título'/>
    <Profile to="/profile">
      <div>
        <strong>{user.name}</strong>
        <Logout onClick={handleSignOut}>Sair</Logout>
      </div>
      <Link to="/profile"> <img 
      src={avatarUrl} 
      alt="Foto do Usuário" /></Link>
    </Profile>
  </Container>
 )
}