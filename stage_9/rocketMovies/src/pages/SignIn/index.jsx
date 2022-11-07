import { TextButton } from '../../components/TextButton'
import {ButtonSign} from '../../components/ButtonSign'
import { Container, Form, Background } from './styles'
import { FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { api } from '../../services/api'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

export function SignIn(){

  const { signIn } = useAuth()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  function handleSignIn() {

    if(!email || !password) {
      return alert("Digite o e-mail e a senha.")
    }

    signIn({email, password})
  }

  return(
    <Container>
      <Form>

        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <div>
          <Input 
            placeholder="E-mail" 
            icon={FiMail} 
            type="email" 
            onChange={e => setEmail(e.target.value)}
          />
          <Input 
            placeholder="Senha" 
            icon={FiLock} 
            type="password"
            onChange={e => setPassword(e.target.value)} 
          /> 
          <ButtonSign title="Entrar" onClick={handleSignIn}/>
        </div>
          
          <TextButton title="Criar Conta" to="/register"/>

      </Form>

      <Background />

    </Container>
  )
}