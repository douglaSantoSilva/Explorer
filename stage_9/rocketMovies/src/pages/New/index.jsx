import { TagHighlighter } from '../../components/TagHighlighter'
import { Container, Content, Form, NewNote} from './styles'
import { TextButton } from '../../components/TextButton'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { ButtonSign } from '../../components/ButtonSign'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { FiArrowLeft } from 'react-icons/fi'
import { useState } from 'react'

export function New() {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState(1)
  const [description, setDescription] = useState("")
  const [tag, setTag] = useState("")
  const [tags, setTags] = useState([])

  function handleAddTag() {
    setTags(prevState => [...prevState, tag])

    console.log(tags)
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(link => link !== deleted))
  }

  return(
    <Container>
      <Header />
      <main>
        <Content>
          <TextButton 
            title="Voltar" 
            icon={FiArrowLeft} 
            to="/"
          />
          <h1>Novo Filme</h1>
        <Form>
          <div>
            <Input 
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />
            <Input 
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <TextArea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Marcadores">
            <div>
              {tags.map((tag, index) => (
                <TagHighlighter 
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(link)}
                />
              )) 

              }        

              <TagHighlighter 
                isNew 
                placeholder="Novo Marcador"
                onChange={e => setTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <NewNote>
            <div>
              <ButtonSign title="Excluir filme"/>
              <ButtonSign title="Salvar alterações"/>
            </div>
          </NewNote>

        </Form>
        </Content>
      </main>
    </Container>
  )
}