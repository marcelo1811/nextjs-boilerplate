import styled from 'styled-components'
import {
  Button,
  Container,
  Row,
  Col,
  Form,
} from 'react-bootstrap'
import {
  Colors,
  Device
} from 'constants'
import {
  BasicButton,
  BasicLayout,
} from 'components'
import Head from 'next/head'

const New = () => {
  return (
    <BasicLayout>
      <Container style={{padding: '50px'}}>
        <Row>
          <Col sm={12} style={{textAlign: 'center'}}>
            <h4>
              Informações do parceiro
            </h4>
          </Col>
        </Row>
        <Row>
          <Col sm={{span: 6, offset: 3}}>
            <div style={{padding: '50px 0px'}}>
              <Form>
                <Row>
                  <Col sm={12}>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Email do dono da lavanderia" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>Senha</Form.Label>
                      <Form.Control type="password"/>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>Confirmar senha</Form.Label>
                      <Form.Control type="password"/>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12}>
                    <Form.Group>
                      <Form.Label>Celular</Form.Label>
                      <Form.Control type="number" placeholder="Celular do dono da lavanderia"/>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>Nome</Form.Label>
                      <Form.Control type="text"/>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>Sobrenome</Form.Label>
                      <Form.Control type="text"/>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>CPF</Form.Label>
                      <Form.Control type="number"/>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>RG</Form.Label>
                      <Form.Control type="number"/>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12}>
                    <Form.Group>
                      <Form.Label>Orgão emissor</Form.Label>
                      <Form.Control type="text" placeholder="Celular do dono da lavanderia"/>
                    </Form.Group>
                  </Col>
                </Row>

                <BasicButton type="submit" style={{width: '100%', padding: '10px', marginTop: '30px'}}>
                  Entrar
                </BasicButton>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </BasicLayout>
  )
}

export default New
