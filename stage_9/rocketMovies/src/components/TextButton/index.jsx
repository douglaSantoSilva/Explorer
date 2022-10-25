import { Container } from './styles'

export function TextButton({icon:Icon, title, ...rest}) {
  return(
    <Container 
    type='button'
    {...rest}>
      {Icon && <Icon size={16}/>}
      {title}
    </Container>
  )
}