import { FiArrowLeft, FiCamera, FiLock, FiUser, FiMail } from 'react-icons/fi'
import { TextButton } from '../../components/TextButton'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Avatar, Form, InputBox } from './styles'


export function Profile() {
  return(
    <Container>
      <header>
        <TextButton title="Voltar" icon={FiArrowLeft} />
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
            <Input placeHolder="Douglas Santos" icon={FiUser} />               
            <Input placeHolder="douglas@gmail.com" icon={FiMail}/>    
            <Input placeHolder="Senha atual" icon={FiLock} />               
            <Input placeHolder="Nova senha" icon={FiLock} /> 
          </InputBox>
        
          <Button title="Salvar"/>
      </Form>
    </Container>
  )
}