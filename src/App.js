import React from 'react';
import Headers from './Headers';
import Article from './Article';
import Footer from './Footer';
import './App.css';
import React, { Component } from 'react'; //importando component do react
import api from './api';//requisitando a api response

/*class App extends Component {

  state = {
    Nome: [], //estado nome para nomes
  }

  async componentDidMount() {
    const response = await api.get('nome');//requisição pode ser vazio tbm

    this.setState({ Nome: response.data }); //recebe dadod response
  }

  render() {

    const { Nome} = this.state;

    return (
      <div>
        <h1>Resultado produto</h1>
        {Nome.map(Nome => (
          <li key={Nome.show.code}>
            <h2>
              <strong>Produto: </strong>
              {Nome.show.name}
            </h2>
            <p>
              {Nome.show.description}
            </p>

          </li>
        ))}
      </div>
    );
  };
};


   */







function App (props) {
  return (
    <div>
        <Headers/>
        <Article />
        <Footer />
    </div>    
  );
};

export default App;
