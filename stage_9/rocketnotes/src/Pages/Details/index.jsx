import { Container, Links, Content } from './styles'
import { Header } from '../../components/Header'
import { Section } from '../../components/section'
import { Tag } from '../../components/Tag'
import { TextButton } from '../../components/TextButton'
import { Button } from '../../components/Button'

export function Details() {
  
  return(
    <Container>
      <Header />
      <main>
        <Content>
          <TextButton title="Excluir Nota"/>
          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aperiam dolore molestias veniam laudantium quae, sed nam fugiat 
            deleniti possimus neque ab sunt iusto quidem optio provident! 
            Vero optio eius quae?
          </p>

          <Section title="Links Úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>

         <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>

    </Container>
  )
}