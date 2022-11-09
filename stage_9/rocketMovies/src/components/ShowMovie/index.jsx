import { Container, Profile } from './styles'
import { Tag } from '../Tag'
import { FiStar } from 'react-icons/fi'

export function ShowMovie({data,children, icon: Icon, title, avatar, ...rest}) {
  return(
    <Container>
      <div>
        <h1>{data.title}</h1>
          <FiStar className="giveStar"/>
          {data.rating >= 2 ? <FiStar className="giveStar"/> : <FiStar/>}
          {data.rating >= 3 ? <FiStar className="giveStar"/> : <FiStar/>}
          {data.rating >= 4 ? <FiStar className="giveStar"/> : <FiStar/>}
          {data.rating == 5 ? <FiStar className="giveStar"/> : <FiStar/>}
      </div>

      <Profile>
        <img 
        src={avatar} 
        alt="Foto do Usuário" />
          {title}
        {Icon && <Icon size={16}/>}
        <span>{data.updated_at}</span>
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