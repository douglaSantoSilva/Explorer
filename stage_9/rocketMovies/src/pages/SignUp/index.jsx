import { TextButton } from '../../components/TextButton'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Form, Background } from './styles'
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'

export function SignUp(){
  return(
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <div>
          <Input placeholder="Nome" icon={FiUser} />
          <Input placeholder="E-mail" icon={FiMail} />
          <Input placeholder="Senha" icon={FiLock} />
          <Button title="Cadastrar" />
          <TextButton title="Voltar para o Login" icon={FiArrowLeft}/>
        </div>
          
      </Form>

      <Background />

    </Container>
  )
}