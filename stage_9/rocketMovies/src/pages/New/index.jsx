import { TagHighlighter } from '../../components/TagHighlighter'
import { Container, Content, Form, Section } from './styles'
import { TextButton } from '../../components/TextButton'
import { TextArea } from '../../components/TextArea'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import {FiArrowLeft} from 'react-icons/fi'

export function New() {
  return(
    <Container>
      <Header />
      <main>
        <Content>
          <TextButton title="Voltar" icon={FiArrowLeft}/>
          <h1>Novo Filme</h1>
        <Form>
          <div>
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota (de 0 a 5)"/>
          </div>
          <TextArea placeholder="Observações"/>

          <Section>
              <TagHighlighter title="React" isNew placeholder="Nova Tag"/>
          </Section>

        </Form>
        </Content>
      </main>
    </Container>
  )
}