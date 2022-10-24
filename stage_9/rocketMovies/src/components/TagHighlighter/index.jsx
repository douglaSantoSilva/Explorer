import {Container} from './styles'
import { FiPlus, FiX} from 'react-icons/fi'

export function TagHighlighter({isNew, value, onClick, title, ...rest}) {
  return(
    <Container isNew={isNew}>
    {
      isNew ? 
    
    <div>
      <input 
      type="text" 
      value={value}
      readOnly={!isNew}
      {...rest}
      />

      <button type='button'onClick={onClick} >
        {title}
        {<FiX />}
      </button>
    </div>
      
      :

      <button type='button'onClick={onClick} >
        {title}
        {<FiX />}
      </button> }

    </Container>
  )
}