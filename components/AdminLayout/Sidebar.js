import styled from "styled-components"
import {
  Colors
} from "constants"
import {
  ListGroup,
  Image,
  Container
} from "react-bootstrap"
import {
  faListUl,
  faStar,
  faHeadset,
  faShoppingBasket,
  faMoneyBillWave,
  faCog,
  faIdCard,
  faQuestion
} from "@fortawesome/free-solid-svg-icons";
import ListGroupItem from "./ListGroupItem"

const Sidebar = () => {
  return (
    <Wrapper>
      <PerfilContainer>
        <PefilImage src="data:image/jpeg;base64,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" roundedCircle />
        <PerfilInfoContainer>
          <h6>Lavanderia do zé</h6>
        </PerfilInfoContainer>
      </PerfilContainer>
      <ListGroup>
        {
          menus.map((menu) => {
            return (
              <ListGroupItem
                label={menu.label}
                icon={menu.icon}
                active={menu.active}
                eventKey={menu.eventKey}
              />
            )
          })
        }
      </ListGroup>
    </Wrapper>
  )
}

const menus = [
  {
    label: "Início",
    icon: null,
    active: false,
    eventKey: "",
  },
  {
    label: "Serviços",
    icon: faListUl,
    active: false,
    eventKey: "services",
  },
  {
    label: "Pedidos",
    icon: faShoppingBasket,
    active: false,
    eventKey: "",
  },
  {
    label: "Avaliações",
    icon: faStar,
    active: false,
    eventKey: "",
  },
  {
    label: "Pagamento",
    icon: faMoneyBillWave,
    active: false,
    eventKey: "",
  },
  {
    label: "Perfil",
    icon: faIdCard,
    active: false,
    eventKey: "",
  },
  {
    label: "Configurações",
    icon: faCog,
    active: false,
    eventKey: "",
  },
  {
    label: "Suporte",
    icon: faHeadset,
    active: false,
    eventKey: "",
  },
  {
    label: "Ajuda",
    icon: faQuestion,
    active: false,
    eventKey: "",
  },
]

const PerfilContainer = styled(Container)`
  display: flex;
  padding: 10px;
`

const PefilImage = styled(Image)`
  height: 60px;
  width: 60px;
  margin: 10px;
`

const PerfilInfoContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  height: 94vh;
  background-color: ${Colors.light};
  position: sticky;
  position: -webkit-sticky; /* Safari */
  top: 6vh;
`

export default Sidebar