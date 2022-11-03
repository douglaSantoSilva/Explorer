import { Container } from './styles'

export function TextButton({title, isActive = false, icon: Icon, ...rest}) {
  return(
    <Container 
    type='button'
    isActive={isActive}
    {...rest}
    >
      {title}
      {Icon && <Icon  size={24} />}
    </Container>
  )
}