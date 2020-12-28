import React, { Component } from 'react';

import ListaDeNotas from './components/listaDeNotas';
import Formulario from './components/formulario';
import ListaDeCategorias from './components/listaDeCategorias';

import "./App.css";
class App extends Component {

  constructor() {
    super();

    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = {titulo, texto, categoria}
    const novoArrayDeNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayDeNotas
    }
    this.setState(novoEstado);
  }

  criarCategoria(categoria) {    
    const novoArrayDeCategorias = [...this.state.categorias, categoria];
    const novoEstado = {
      categorias: novoArrayDeCategorias
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
        <Formulario categorias={this.state.categorias} criarNotaParent={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias categorias={this.state.categorias} criarCategoriaParent={this.criarCategoria.bind(this)} />
          <ListaDeNotas notas={this.state.notas} removeNota={this.removeNota.bind(this)} />
        </main>
      </section>
    );
  }
}

export default App;
