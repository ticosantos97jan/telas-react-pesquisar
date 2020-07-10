import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Card, CardText, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Col, Row } from 'reactstrap';
import './App.css';


const Article = (props) => {
  return (
    <div className="corpo ">
      <Jumbotron fluid className="jum bg-dark">
        <Container>
          <Row>
            <Col sm="6">
              <Card body className="options bg-info col-" >
                <CardTitle>Buscar produtos pelo Nome:</CardTitle>
                <CardText>
                  <Form>
                    <FormGroup>
                      <Input className="input" type="text" name="name" id="name" placeholder="insira o nome" />
                    </FormGroup>
                  </Form>
                </CardText>
                <Button className="button">Pesquisar</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body className="options bg-info col-" >
                <CardTitle>Resultados:</CardTitle>
                <CardText>
                  <Form>
                    <FormGroup>
                      <Label for="form">Nome</Label>
                      <Input className="input" type="text" name="name" id="name"  />
                    </FormGroup>
                    <FormGroup>
                      <Label for="form">Descrição:</Label>
                      <Input className="input" type="text" name="description" id="description"  />
                    </FormGroup>
                    <FormGroup>
                      <Label for="form">Código:</Label>
                      <Input className="input" type="text" name="code" id="code"  />
                    </FormGroup>
                    <FormGroup>
                      <Label for="form">Quantidade:</Label>
                      <Input className="input" type="text" name="quant" id="quant"  />
                    </FormGroup>
                    <FormGroup>
                      <Label for="form">Valor:</Label>
                      <Input className="input" type="text" name="price" id="price"  />
                    </FormGroup>
                  </Form>
                </CardText>
              </Card>
            </Col>

          </Row>
        </Container>



      </Jumbotron>
    </div>
  );
};

export default Article;