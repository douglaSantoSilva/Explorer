import { Link } from 'react-router-dom'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from "./styles";

export function SignUp() {

  return(
    <Container>

      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar os seus links úteis.</p>

        <h2>Crie a sua Conta</h2>
        <Input 
        placeholder="Nome"
        type="text"
        icon={FiUser}
        />
        
        <Input 
        placeholder="E-mail"
        type="text"
        icon={FiMail}
        />

        <Input 
        placeholder="Senha"
        type="password"
        icon={FiLock}
        />

        <Button title="Cadastrar">
        </Button>


        <Link to="/">Voltar para o Login</Link>
      </Form>

 
    </Container>
  )
}