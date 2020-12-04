import React, { Component } from 'react';
import "./style.css";

class Formulario extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _handleTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _handleText(event) {
        event.stopPropagation();
        this.texto = event.target.value;
    }

    _criarNota(event) {
        event.preventDefault();
        this.props.criarNotaParent(this.titulo, this.texto);
    }

    render() {
        return (
            <form className="formulario" onSubmit={this._criarNota.bind(this)}>
                <input 
                    type="text" 
                    placeholder="Título" 
                    onChange={this._handleTitulo.bind(this)}
                />
                
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