import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { TextButton } from '../../components/TextButton'
import { Container, Form, Avatar } from './styles'
import { useAuth } from '../../hooks/authContext'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function Profile() {
  const navigate = useNavigate()
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  console.log(avatarUrl)

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)
  
  async function handleUpdate() {
    const updated = { 
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    if(passwordNew && !passwordOld) {
      return  alert("Digite a senha antiga.")
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function handleBack() {
    navigate(-1)
  }

  return(
    <Container>
      <header>
        <TextButton onClick={handleBack} icon={FiArrowLeft} />
      </header>

      <Form>
        <Avatar>
          <img 
          src={avatar}
          alt="Foto do Usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input 
            id="avatar"
            type="file"
            onChange={handleChangeAvatar}
            />

          </label>
        </Avatar>

        <Input
        placeholder="Nome"
        type="text"
        icon={FiUser}
        value={name}
        onChange={e => setName(e.target.value)}

        />

        <Input
        placeholder="Email"
        type="text"
        icon={FiMail}
        value={email}
        onChange={e => setEmail(e.target.value)}
        />

        <Input
        placeholder="Senha Atual"
        type="password"
        icon={FiLock}
        onChange={e => setPasswordOld(e.target.value)}       
        />

        <Input
        placeholder="Nova Senha"
        type="password"
        icon={FiLock}
        onChange={e => setPasswordNew(e.target.value)}        
        />

        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>
    </Container>
  )
}