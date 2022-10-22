import { BoxContainer } from './styles'
import { Tag } from '../../components/Tag'
export function Notes({ data , ...rest}) {

  return(
    <BoxContainer {...rest}>
      <h1>{ data.title }</h1>

      { 
        data.tags &&
        <footer>
          { 
            data.tags.map(tag => <Tag title={tag.name} key={tag.id} />
            )
          }
        </footer>
      }
    </BoxContainer>
  )
}