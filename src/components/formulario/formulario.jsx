import React, { Component } from 'react';
import "./style.css";

class Formulario extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";

        this.state = {
            texto: "",
            titulo: ""
        };
    }

    _handleTitulo(event) {
        event.stopPropagation();
        this.setState({
            titulo: event.target.value
        })
        // this.titulo = event.target.value;
    }

    _handleText(event) {
        event.stopPropagation();
        this.setState({
            texto: event.target.value
        })
        // this.texto = event.target.value;
    }

    _criarNota(event) {
        event.preventDefault();
        this.props.criarNotaParent(this.state.titulo, this.state.texto);
        this.setState({
            texto: "",
            titulo: ""
        })
    }

    render() {
        return (
            <form className="formulario" onSubmit={this._criarNota.bind(this)}>
                <input 
                    type="text" 
                    placeholder="Título" 
                    value={this.state.titulo}
                    onChange={this._handleTitulo.bind(this)}
                />
                
                <textarea 
                    placeholder="Escreva sua nota..." 
                    value={this.state.texto}
                    onChange={this._handleText.bind(this)}
                />
                <button>Criar</button>
            </form>
        );
    }
}

export default Formulario;