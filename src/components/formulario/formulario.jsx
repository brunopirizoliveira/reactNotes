import React, { Component } from 'react';
import "./style.css";

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.texto = "";
        this.titulo = "";
        this.state = {categorias:[]}
        this.novaCategoria = this._novasCategorias.bind(this);
    }

    componentDidMount() {
        this.props.categorias.inscrever(this.novaCategoria);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this.novaCategoria);
    }

    _novasCategorias(categorias) {
        this.setState({...this.state, categorias})
    }

    _handleTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value
        // this.titulo = event.target.value;
    }

    _handleText(event) {
        event.stopPropagation();
        this.texto = event.target.value
    }
    _handleCategoria(event) {
        event.stopPropagation();
        this.categoria = event.target.value
    }

    _criarNota(event) {
        event.preventDefault();
        this.props.criarNotaParent(this.titulo, this.texto, this.categoria);        
        this.texto = "";
        this.titulo = "";
        this.categoria = "";        
    }

    render() {
        return (
            <form className="formulario" onSubmit={this._criarNota.bind(this)}>
                <input 
                    type="text" 
                    placeholder="Título"
                    onChange={this._handleTitulo.bind(this)}
                />

                <select className="form-cadastro-input" onChange={this._handleCategoria.bind(this)}>
                    <option>Sem Categoria</option>
                    {this.state.categorias.map((categoria, index) => {
                        return <option key={index}>{categoria}</option>
                    })}
                </select>
                <textarea 
                    placeholder="Escreva sua nota..."
                    onChange={this._handleText.bind(this)}
                />
                <button>Criar</button>
            </form>
        );
    }
}

export default Formulario;