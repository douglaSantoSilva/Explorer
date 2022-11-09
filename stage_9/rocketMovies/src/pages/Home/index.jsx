import { FiPlus } from 'react-icons/fi'
import { Container, Content, Section} from './styles'
import { Header} from '../../components/Header'
import { NoteMovie } from '../../components/NoteMovie'
import { TextButton } from '../../components/TextButton'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState("")
  const [tagsSelected, setTagsSelected] = useState([])

  const navigate = useNavigate()

  function handleNote(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data.notesWithTags)
    }

    fetchNotes()
  }, [search])

  return(
    <Container>
      
      <Header isSearch onChange={(e) => setSearch(e.target.value)}/>
      <main>
        <Content>
          <div>
            <h1>Meus Filmes</h1>
            <TextButton title="Adicionar Filme" icon={FiPlus} to="/new" />
          </div>

          <Section>
            
            {notes.map(note => (
                <NoteMovie 
                  key={String(note.id)}
                  data={note}
                  onClick={() => handleNote(note.id)}
                />
              ))}

          </Section>  
        </Content> 
      </main>
    </Container>
  )
}