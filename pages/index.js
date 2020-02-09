import styled from 'styled-components'
import {
  Button,
  Container,
  Row,
  Col,
  FigureImage,
} from 'react-bootstrap'
import {
  Colors,
  Device
} from 'constants'
import {
  BasicButton,
  Circle
} from 'components'
import Head from 'next/head'

const HomePage = () => {
  return (
    <div>
    <Head>
      <script src="https://widget.prefinery.com/widget/v2/c6om1eoc.js" async defer></script>
    </Head>
      <Container fluid={true}>
        <FirstRow>
          <Col sm={12} md={{span: 5, offset: 1}}>
            <FirstBox>
              <h1 style={{fontWeight: 'bold'}}>Limpo, seco & lavado na sua porta</h1>
              <p style={{marginTop: '40px'}}>Simples e conveniente, a lavanderia mais próxima de você.</p>

              <BasicButton className='prefinery-form-cta' color={Colors.secondary} style={{marginTop: '20px'}}>
                Faça um pedido
              </BasicButton>
            </FirstBox>
          </Col>
          <Col sm={12} md={6}>
            <ImageBox>
              <WashingImage src="/images/washing-machine.png" alt="washing-machine"/>
              <HandImage src="/images/hand-smartphone-logo.png" alt="hand-smartphone"/>
            </ImageBox>
          </Col>
        </FirstRow>
        <SecondRow>
          <Col sm={12}>
            <SecondBox>
              <h1 style={{color: Colors.primary}}>
                Faça um pedido agora
              </h1>
              <p style={{color: Colors.secondary, marginTop: '20px'}}>
                Viva para o que realmente importa, sem preocupações.
              </p>
              <BasicButton className='prefinery-form-cta'>
                Faça um pedido
              </BasicButton>
            </SecondBox>
          </Col>
        </SecondRow>
        <ThirdRow>
          <Col sm={12}>
            <ThirdBox>
              <h1 style={{color: Colors.primary}}>
                Como funciona?
              </h1>
              <ListItem number='1º'>
                <span style={{fontWeight: 'bold'}}>Você pede.</span>
                <p style={{color: Colors.primary}}>Agende uma coleta online em nossa plataforma.</p>
              </ListItem>
              <ListItem number='2º'>
                <span style={{fontWeight: 'bold'}}>Nós coletamos.</span>
                <p style={{color: Colors.primary}}>Coletamos e entregamos, apenas nos deixe saber onde você está, trabalho ou casa.</p>
              </ListItem>
              <ListItem number='3º'>
                <span style={{fontWeight: 'bold'}}>Nós lavamos</span>
                <p style={{color: Colors.primary}}>Nossos parceiros são selecionados com o mais alto critério de qualidade - garantimos a sua satisfação.</p>
              </ListItem>
              <ListItem number='4º'>
                <span style={{fontWeight: 'bold'}}>Nós entregamos</span>
                <p style={{color: Colors.primary}}>Entregamos suas roupas de volta aonde você estiver.</p>
              </ListItem>
            </ThirdBox>
          </Col>
        </ThirdRow>
        <FourthRow>
          <Col sm={12} md={6}>
            <SecondImageBox>
              <HandImage2 src="/images/hand-smartphone-logo.png" alt="iphone"/>
            </SecondImageBox>
          </Col>
          <Col sm={12} md={6}>
            <FourthBox>
              <h2 style={{color: Colors.white, fontWeight: 'bold'}}>
                Controle na <br/>
                palma da suas <br/>
                mãos.
              </h2>
              <BasicButton className='prefinery-form-cta'>
                Pedir agora
              </BasicButton>
            </FourthBox>
          </Col>
        </FourthRow>
      </Container>
    </div>
  )
}

const ListItem = (props) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', margin: '10px'}}>
      <div stlye={{flexShrink: '1'}}>
        <Circle color={Colors.primary} size={50}>
          <span style={{color: Colors.white, fontWeight: 'bold'}}>
            {props.number}
          </span>
        </Circle>
      </div>
      <div style={{marginLeft: '10px', color: Colors.secondary, flexGrow: '1'}}>
        {props.children}
      </div>
    </div>
  )
}

const FirstRow = styled(Row)`
  background-color: ${Colors.primary};
  height: 500px;
  color: white;
`

const FirstBox = styled.div`
  padding: 100px 30px 0px 30px;
  text-align: center;

  @media ${Device.minMobileL} {
    text-align: left;
    height: 100%;
  }
`

const WashingImage = styled.img`
  width: 320px;
  height: 320px;

  @media ${Device.minMobileL} {
    position: absolute;
    left: 0px;
    bottom: -10px;
    z-index: 1;
  }
`

const HandImage = styled.img`
  width: 320px;
  height: 380px;

  @media (max-width: 1300px) {
    display: none;
  }

  @media ${Device.minMobileL} {
    position: absolute;
    bottom: 10px;
    right: 25px;
  }
`

const ImageBox = styled.div`
  display: flex;
  justify-content: center;

  @media ${Device.minMobileL} {
    height: 100%;
    position: relative;
  }
`

const SecondRow = styled(Row)`
  background-color: ${Colors.light};

  @media ${Device.minMobileL} {
    background-color: ${Colors.white};
    padding-left: 200px;
  }
`

const SecondBox = styled.div`
  padding-top: 200px;
  text-align: center;

  @media ${Device.maxMobileS} {
    padding-top: 300px;
  }

  @media ${Device.minMobileL} {
    padding: 80px 100px;
    margin-top: -30px;
    width: 100%;
    background-color: ${Colors.light};
    text-align: left;
  }
`

const ThirdRow = styled(Row)`
`

const ThirdBox = styled.div`
  padding: 50px 0px;

  @media ${Device.minMobileL} {
    padding-left: 200px;
  }
`

const FourthRow = styled(Row)`
  background-color: ${Colors.primary};
`

const FourthBox = styled.div`
  text-align: center;
  padding: 200px 50px;

  @media ${Device.minMobileL} {
    text-align: left;
  }
`

const SecondImageBox = styled.div`
  height: 100%;
  position: relative;
`

const HandImage2 = styled.img`
  width: 350px;
  height: 430px;
  position: absolute;
  bottom: 0px;
  right: 50px;

  @media ${Device.maxMobileL} {
    display: none;
  }
`

export default HomePage
