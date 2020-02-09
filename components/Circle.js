import styled from 'styled-components'

const Circle = (props) => {
  return (
    <StyledCircle
      color={props.color}
      size={props.size}
    >
      {props.children}
    </StyledCircle>
  )
}

const StyledCircle = styled.div`
  border-radius: 50%;
  background-color: ${props => props.color};
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Circle
