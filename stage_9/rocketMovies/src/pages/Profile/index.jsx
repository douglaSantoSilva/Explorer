import { FiArrowLeft, FiCamera, FiLock, FiUser, FiMail } from 'react-icons/fi'
import { TextButton } from '../../components/TextButton'
import { ButtonSign } from '../../components/ButtonSign'
import { Input } from '../../components/Input'
import { Container, Avatar, Form, InputBox } from './styles'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState()
  const [oldPassword, setOldPassword] = useState()

  async function handleUserUpdate() {
    const update = {
      name,
      email,
      old_password: oldPassword,
      password
    }

    const userUpdated = Object.assign(user, update)

  await updateProfile({ user: userUpdated, avatarFile})
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return(
    <Container>
      <header>
        <TextButton title="Voltar" icon={FiArrowLeft} to={-1} />
      </header>
        <Form>
          <Avatar>
            <img src={avatar} alt="Foto do Usuário" />
            <label htmlFor="avatar">
              <FiCamera />
              <input id="avatar" type="file" onChange={handleChangeAvatar}/>
            </label>
          </Avatar>

          <InputBox>
            <Input 
              placeholder={name} 
              icon={FiUser} 
              type="text"
              onChange={e => setName(e.target.value)}
            />               
            <Input 
              placeholder="douglas@gmail.com" 
              icon={FiMail} 
              type={email}
              onChange={e => setEmail(e.target.value)}
            />    
            <Input 
              placeholder="Senha atual" 
              icon={FiLock} 
              type="password"
              onChange={e => setOldPassword(e.target.value)}
            />               
            <Input 
              placeholder="Nova senha" 
              icon={FiLock} 
              type="password"
              onChange={e => setPassword(e.target.value)}
            /> 
          </InputBox>
        
          <ButtonSign title="Salvar" onClick={handleUserUpdate}/>
      </Form>
    </Container>
  )
}