import React, { Component } from 'react';
import CardNota from '../cardNota/cardNota';
import "./style.css";

class ListaDeNotas extends Component {
    render() {
        return (
            <div>
                <ul className="lista-de-notas"> {this.props.notas.map((nota, index) => {
                    return (
                        <li key={index} className="lista-de-notas_item">
                            <CardNota titulo={nota.titulo} texto={nota.texto} />
                        </li>
                    );
                })}</ul>
            </div>
        );
    }
}

export default ListaDeNotas;
