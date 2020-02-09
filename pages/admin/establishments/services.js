import styled from 'styled-components'
import {
  Container,
  ListGroup,
} from 'react-bootstrap'
import {
  Colors,
  Device
} from 'constants'
import {
  AdminLayout,
  ProductsTable
} from 'components'

const Index = () => {
  return (
    <div>
      <ListGroup horizontal variant="fllush">
        <ListGroup.Item>+ Adicionar categoria</ListGroup.Item>
        <ListGroup.Item>+ Adicionar item</ListGroup.Item>
        <ListGroup.Item>+ Criar um pacote</ListGroup.Item>
        <ListGroup.Item>Ordernar items</ListGroup.Item>
      </ListGroup>
      <Container>
        <ProductsTable />
      </Container>
    </div>
  )
}

const OptionsBox = styled.div`
  display: flex;
`

export default AdminLayout(Index)

