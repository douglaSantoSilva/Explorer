import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'
import { TextButton } from '../../components/TextButton'
import { ButtonSign } from '../../components/ButtonSign'
import { Container, Form, Background } from './styles'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import { api } from '../../services/api'
import { useState } from 'react'

export function SignUp(){

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {

    if(!name || !email || !password) {
      return alert("Preencha todos os campos para fazer o cadastro")
    }

    api.post("users", {name, email, password})
    .then(() => { 
      alert("usuário cadastrado com sucesso!")
      navigate("/")
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
        console.log(error.response.data.message)
      }else {
        alert("Não foi possível realizar o cadastro.")
      }
    })
  }

  return(
    <Container>
      <Form>
        
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <div>

          <Input 
            placeholder="Nome" 
            icon={FiUser} 
            type="text" 
            onChange={e => setName(e.target.value)} 
          />
          <Input 
            placeholder="E-mail" 
            icon={FiMail} 
            type="email" 
            onChange={e => setEmail(e.target.value.toLowerCase())}
          />
          <Input 
            placeholder="Senha" 
            icon={FiLock} 
            type="password" 
            onChange={e => setPassword(e.target.value)}
          />

          <ButtonSign title="Cadastrar" onClick={handleSignUp} />
          <TextButton title="Voltar para o Login" icon={FiArrowLeft} to={-1}/>

        </div>    
             
      </Form>

      <Background />

    </Container>
  )
}