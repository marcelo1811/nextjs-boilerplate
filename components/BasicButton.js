import styled from 'styled-components'
import {
  Button,
} from 'react-bootstrap'
import { Colors } from '../constants'

const BasicButton = styled(Button)`
  background-color: ${props => props.color || Colors.secondary };
  border-color: ${props => props.color || Colors.secondary };
  padding: 15px 40px;
  font-weight: bold;

  &:hover {
    opacity: .8;
    background-color: ${props => props.color || Colors.secondary };
    border-color: ${props => props.color || Colors.secondary };
  }
`

export default BasicButton
