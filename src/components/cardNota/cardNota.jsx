import React, { Component } from 'react';
import "./style.css";
import deleteSVG from "../../assets/img/delete.svg";

class CardNota extends Component {
    state = {}

    _removeNota() {
        this.props.removeNotaParent(this.props.indice);
    }

    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_header">
                    <h3>{this.props.titulo}</h3>                    
                    <img src={deleteSVG} className="icon_trash" alt="Removendo item" onClick={() => this._removeNota() } />                    
                </header>                
                <h4>{this.props.categoria}</h4>
                <p>{this.props.texto}</p>
            </section>
        );
    }
}

export default CardNota;