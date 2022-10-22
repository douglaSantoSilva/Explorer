import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { TextButton } from '../../components/TextButton'
import { Input } from '../../components/Input'
import { Section } from '../../components/section'
import { Notes } from '../../components/Note'

export function Home() {
  return(
    <Container>
      <Brand>
        <h1>RocketNotes</h1>      
      </Brand>

      <Header />

      <Menu>
        <li><TextButton title="Todos" isActive/></li>
        <li><TextButton title="React"/></li>
        <li><TextButton title="NodeJs"/></li>
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