import { Container, Profile } from './styles'
import { Tag } from '../Tag'

export function ShowMovie({data,children, icon: Icon, ...rest}) {
  return(
    <Container>
      <div>
        <h1>{data.title}</h1>
      </div>

      <Profile>
        <img 
        src="https://www.github.com/douglaSantoSilva.png" 
        alt="Foto do Usuário" />
        {data.name}
        {Icon && <Icon size={16}/>}
        <span>{data.time}</span>
      </Profile>
      
      {
      data.tags &&
        <div>
          { 
          data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </div>}

      {data.description}
      
    </Container>
  )
}