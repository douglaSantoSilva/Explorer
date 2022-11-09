import { Container, Star} from './styles'
import { Tag } from '../Tag'
import { FiStar } from 'react-icons/fi'

export function NoteMovie({data,...rest}) {
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>
      
        <Star>
          <FiStar className="giveStar"/>
          {data.rating >= 2 ? <FiStar className="giveStar"/> : <FiStar/>}
          {data.rating >= 3 ? <FiStar className="giveStar"/> : <FiStar/>}
          {data.rating >= 4 ? <FiStar className="giveStar"/> : <FiStar/>}
          {data.rating == 5 ? <FiStar className="giveStar"/> : <FiStar/>}
        </Star>
       
      <p>{ data.description }</p>
      {
      data.tags &&
        <footer>
          { 
          data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>}
    </Container>
  )
}