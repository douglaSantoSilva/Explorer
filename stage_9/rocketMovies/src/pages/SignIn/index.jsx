import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'
import { TextButton } from '../../components/TextButton'
import { Container, Form, Background } from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function SignIn(){
  return(
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <div>
          <Input placeholder="E-mail" icon={FiMail} type="email"/>
          <Input placeholder="Senha" icon={FiLock} type="password"  />
          <Button title="Entrar" />
        </div>
          
          <TextButton title="Criar Conta" to="/register"/>
      </Form>

      <Background />

    </Container>
  )
}