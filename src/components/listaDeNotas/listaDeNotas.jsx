import React, { Component } from 'react';
import CardNota from '../cardNota/cardNota';
import "./style.css";

class ListaDeNotas extends Component {

    _removeNota(index) {
        this.props.removeNota(index);
    }

    render() {
        return (
            <div>
                <ul className="lista-de-notas"> {this.props.notas.map((nota, index) => {
                    return (
                        <li key={index} className="lista-de-notas_item" onClick={() => this._removeNota({index}) }>
                            <CardNota titulo={nota.titulo} texto={nota.texto} />
                        </li>
                    );
                })}</ul>
            </div>
        );
    }
}

export default ListaDeNotas;
