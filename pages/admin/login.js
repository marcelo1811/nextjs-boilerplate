import styled from 'styled-components'
import React from 'react'
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
  BasicLayout
} from 'components'
import {
  loginService
} from 'services'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    loginService()
  }

  return (
    <BasicLayout>
      <Container style={{padding: '50px'}}>
        <Row>
          <Col sm={12} style={{textAlign: 'center'}}>
            <h4>
              Login do parceiro
            </h4>
          </Col>
        </Row>
        <Row>
          <Col sm={{span: 6, offset: 3}}>
            <div style={{padding: '50px 0px'}}>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="nome@email.com.br" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="Insira sua senha" />
                </Form.Group>
                <span style={{fontSize: '12px'}}>
                  <a href="">
                    <u>
                      Esqueci minha senha
                    </u>
                  </a>
                </span>
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

export default Login
