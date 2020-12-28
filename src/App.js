import React, { Component } from 'react';

import ListaDeNotas from './components/listaDeNotas';
import Formulario from './components/formulario';
import ListaDeCategorias from './components/listaDeCategorias';

import "./App.css";
import Categorias from './dados/Categorias';
import Notas from './dados/Notas';
class App extends Component {

  constructor() {
    super();

    this.categorias = new Categorias();
    this.notas = new Notas();
  }

  // criarNota(titulo, texto, categoria) {
  //   const novaNota = {titulo, texto, categoria}
  //   const novoArrayDeNotas = [...this.state.notas, novaNota];
  //   const novoEstado = {
  //     notas: novoArrayDeNotas
  //   }
  //   this.setState(novoEstado);
  // }

  // criarCategoria(categoria) {    
  //   const novoArrayDeCategorias = [...this.state.categorias, categoria];
  //   const novoEstado = {
  //     categorias: novoArrayDeCategorias
  //   }
  //   this.setState(novoEstado);
  // }

  // removeNota(nota) {
  //   const novoArrayDeNotas = [...this.state.notas];
  //   novoArrayDeNotas.splice(nota.index, 1);
  //   const novoEstado = {
  //     notas: novoArrayDeNotas
  //   }
  //   this.setState(novoEstado);
  // }

  render() {
    return (
      <section className="App">
        <Formulario categorias={this.categorias} criarNotaParent={this.notas.adicionarNota.bind(this.notas)} />
        <main className="conteudo-principal">
          <ListaDeCategorias categorias={this.categorias} criarCategoriaParent={this.categorias.adicionarCategoria.bind(this.categorias)} />
          <ListaDeNotas notas={this.notas} removeNota={this.notas.apagarNota.bind(this.notas)} />
        </main>
      </section>
    );
  }
}

export default App;
