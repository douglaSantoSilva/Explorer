import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { TextButton } from '../../components/TextButton'
import { Section } from '../../components/section'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Notes } from '../../components/Note'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function Home() {
  const [tags, setTags] = useState([])

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags")
      console.log(response)
      setTags(response.data)
    }

    fetchTags()
  }, []) 

  return(
    <Container>
      <Brand>
        <h1>RocketNotes</h1>      
      </Brand>

      <Header />

      <Menu>
        <li>
          <TextButton 
            title="Todos" 
            isActive
          />
        </li>
        {
          tags && tags.map((tag, index) => (
            <li key={String(tag.id)}><TextButton title={tag.name} /></li>
          ))
        }
        
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Notes data={{
            title: "React Modal", 
            tags: [
              {id: '1', name: "react"},
              {id: '2', name: "rocketSeat"}
          ]
            }}/>
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  )
}