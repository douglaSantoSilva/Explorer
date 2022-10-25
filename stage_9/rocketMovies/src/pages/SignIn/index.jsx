import { TextButton } from '../../components/TextButton'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Form, Background } from './styles'
import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'

export function SignIn(){
  return(
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <div>
          <Input placeholder="E-mail" icon={FiMail} />
          <Input placeholder="Senha" icon={FiLock} />
          <Button title="Entrar" />
          <TextButton title="Criar Conta"/>
        </div>
          
      </Form>

      <Background />

    </Container>
  )
}