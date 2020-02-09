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
} from 'components'
import Head from 'next/head'
import { adminAuth } from "utils";

const New = () => {
  return (
    <div>
      <Container style={{padding: '50px'}}>
        <Row>
          <Col sm={12} style={{textAlign: 'center'}}>
            <h4>
              Informações do estabelecimento
            </h4>
          </Col>
          <Col sm={{span: 6, offset: 3}}>
            <div style={{padding: '50px 0px'}}>
              <Form>
                <Row>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>C.N.P.J.</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12}>
                    <Form.Group>
                      <Form.Label>Razão social</Form.Label>
                      <Form.Control type="text"/>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12}>
                    <Form.Group>
                      <Form.Label>Nome da lavanderia</Form.Label>
                      <Form.Control type="text"/>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12}>
                    <Form.Group>
                      <Form.Label>Telefone da lavanderia</Form.Label>
                      <Form.Control type="number"/>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} style={{textAlign: 'center', padding: '50px 0px'}}>
                    <h4>
                      Endereço
                    </h4>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12}>
                    <Form.Group>
                      <Form.Label>C.E.P</Form.Label>
                      <Form.Control type="number"/>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>Cidade</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>Estado</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col sm={9}>
                    <Form.Group>
                      <Form.Label>Endereço</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col sm={3}>
                    <Form.Group>
                      <Form.Label>Número</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12}>
                    <Form.Group>
                      <Form.Label>Lavanderia possui serviço de entrega?</Form.Label>

                      <Row>
                        <Col sm={4}>
                          <Form.Check inline label="Sim" type='radio'/>
                        </Col>
                        <Col sm={4}>
                          <Form.Check inline label="Não" type='radio'/>
                        </Col>
                      </Row>

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
    </div>
  )
}

export default adminAuth(New)
