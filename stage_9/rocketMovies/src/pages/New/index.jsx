import { TagHighlighter } from '../../components/TagHighlighter'
import { Container, Content, Form, NewNote} from './styles'
import { TextButton } from '../../components/TextButton'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { ButtonSign } from '../../components/ButtonSign'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { FiArrowLeft } from 'react-icons/fi'


export function New() {
  return(
    <Container>
      <Header />
      <main>
        <Content>
          <TextButton title="Voltar" icon={FiArrowLeft} to="/"/>
          <h1>Novo Filme</h1>
        <Form>
          <div>
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota (de 0 a 5)"/>
          </div>
          <TextArea placeholder="Observações"/>

          <Section title="Marcadores">
            <div>
              <TagHighlighter placeholder="React"/>
              <TagHighlighter title="React" isNew placeholder="Novo Marcador"/>
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