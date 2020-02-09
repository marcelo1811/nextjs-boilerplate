import styled from "styled-components"
import {
  Colors
} from "constants"
import {
  ListGroup
} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'

const StyledListGroupItem = styled(ListGroup.Item)`
  background-color: ${Colors.light};
`

const ListGroupItem = (props) => {
  const router = useRouter()

  const _onClick = () => {
    const href = `/admin/establishments/${props.eventKey}`

    router.replace(href)
  }

  return (
    <StyledListGroupItem
      active={props.active}
      onClick={() => _onClick()}
    >
      {
        props.icon
        ? <FontAwesomeIcon icon={props.icon} style={{ marginRight: "10px" }}/>
        : null
      }
      {props.label}
    </StyledListGroupItem>
  )
}

export default ListGroupItem