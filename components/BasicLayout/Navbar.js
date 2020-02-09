import styled from 'styled-components'
import {
  Colors,
  Device
} from 'constants'
import { useRouter } from 'next/router'
import { adminLogged } from 'utils'
import { BasicButton } from 'components'
import { logoutService } from 'services'

const NavbarWrapper = styled.div`
  background-color: ${Colors.primary};
  color: ${Colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;

  @media ${Device.minMobileL} {
    padding: 5px 150px;
    display: ${props => props.landing ? 'block' : 'flex'};
  }
`

const Navbar = (props) => {
  const router = useRouter()

  const handleLogout = () => {
    logoutService()
  }

  return (
    <NavbarWrapper landing={router.pathname === '/'}>
      <h3>Lave</h3>
      {
        adminLogged()
        ? <BasicButton onClick={() => handleLogout()}>Sair</BasicButton>
        : 'deslogado'}
    </NavbarWrapper>
  )
}

export default Navbar
