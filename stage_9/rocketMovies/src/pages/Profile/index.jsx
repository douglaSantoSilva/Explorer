import { FiArrowLeft, FiCamera, FiLock, FiUser, FiMail } from 'react-icons/fi'
import { TextButton } from '../../components/TextButton'
import { ButtonSign } from '../../components/ButtonSign'
import { Input } from '../../components/Input'
import { Container, Avatar, Form, InputBox } from './styles'

export function Profile() {
  return(
    <Container>
      <header>
        <TextButton title="Voltar" icon={FiArrowLeft} to="/" />
      </header>
        <Form>
          <Avatar>
          <img 
          src="https://github.com/douglaSantoSilva.png" 
          alt="Foto do Usuário" />
          <label htmlFor="avatar">
            <FiCamera />

            <input 
            id="avatar"
            type="file"
            />
          </label>
          </Avatar>

          <InputBox>
            <Input placeHolder="Douglas Santos" icon={FiUser} type="text" />               
            <Input placeHolder="douglas@gmail.com" icon={FiMail} type="email" />    
            <Input placeHolder="Senha atual" icon={FiLock} type="password" />               
            <Input placeHolder="Nova senha" icon={FiLock} type="password" /> 
          </InputBox>
        
          <ButtonSign title="Salvar"/>
      </Form>
    </Container>
  )
}