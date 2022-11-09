import { TextButton } from '../../components/TextButton'
import { ShowMovie } from '../../components/ShowMovie'
import { Header } from '../../components/Header'
import { Container, Content } from './styles'
import { FiArrowLeft } from 'react-icons/fi'
import { FiClock } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { ButtonSign } from '../../components/ButtonSign'

export function MoviePreview() {
  const params = useParams()
  const [data, setData] = useState(null)

  const { user } = useAuth()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  
  function handleRemoveNote() {
    const confirm = window.confirm("Tem certeza que deseja remover essa nota?")
    
    if(confirm) {
      api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
    else {
      return
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)   

    setData(response.data)
    }

    async function dateUser() {
    //  updated_at: "2022-11-08 00:48:08"
    const dateNote = response.data.updated_at.split(" ")
    console.log(dateNote)
    }

    fetchNote()
  }, [])
  
  return(
    <Container>
      <Header />      
   
      <main>   
        <Content>
          <TextButton title="Voltar" icon={FiArrowLeft} to={-1}/>
        { data &&
          <ShowMovie
            title={user.name}
            avatar={avatarUrl}
            icon={FiClock}
            data={data}
            key={data.id}
          />}
        </Content>
        <ButtonSign title="Excluir Filme" onClick={handleRemoveNote} />   
      </main>   
    </Container>
  )
}