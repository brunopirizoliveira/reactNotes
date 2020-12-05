import React, { Component } from 'react';
import ListaDeNotas from './components/listaDeNotas/listaDeNotas';
import Formulario from './components/formulario/formulario';
import "./App.css";
class App extends Component {

  constructor() {
    super();
    this.notas = [];
    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo,texto}
    const novoArrayDeNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayDeNotas
    }
    this.setState(novoEstado);
  }

  removeNota(nota) {
    const novoArrayDeNotas = [...this.state.notas];
    novoArrayDeNotas.splice(nota.index, 1);
    const novoEstado = {
      notas: novoArrayDeNotas
    }
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="App">
        <Formulario criarNotaParent={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} removeNota={this.removeNota.bind(this)} />
      </section>
    );
  }
}

export default App;
