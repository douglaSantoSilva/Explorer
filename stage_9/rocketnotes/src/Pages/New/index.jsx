import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Link, useNavigate } from 'react-router-dom'
import { Section } from '../../components/section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Container, Form} from './styles'
import { api } from '../../services/api'
import { useState } from 'react'

export function New() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navitate = useNavigate()

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {

    if(!title) {
      return alert("digite o título da nota.")
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar, porém não clicou para adiciona-la. Clique no campo para adicionar ou deixe-o vazio.")
    }

    if(newLink) {
      return alert("Você deixou um link no campo para adicionar, porém não clicou para adiciona-la. Clique no campo para adicionar ou deixe-o vazio.")
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })
    console.log(title)
    alert("Nota criada com sucesso!")
    navitate("/")
  }

  return(
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />

          <TextArea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links Úteis">
            {
              links.map((link, index) => (
              <NoteItem
              key={String(index)} 
              value={link}
              onClick={() => handleRemoveLink(link)}
              />    
              ))
            }
          <NoteItem 
              isNew 
              placeholder="Novo Link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
              />    
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag} 
                    onClick={() => handleRemoveTag(tag)}
                   />
                ))
              }
              <NoteItem 
                isNew 
                placeholder="Nova Tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button 
            title="Salvar"
            onClick={handleNewNote} 
          />
          
        </Form>
      </main>
    </Container>
  )
}