import React, { Component } from 'react';
import CardNota from '../cardNota/cardNota';
import "./style.css";

class ListaDeNotas extends Component {

    constructor() {
        super();
        this.state = {notas: []}
        this.novaNota = this._novasNotas.bind(this);
    }

    componentDidMount() {
        this.props.notas.inscrever(this.novaNota);
    }
    
    componentWillUnmount() {
        this.props.notas.desinscrever(this.novaNota);
    }

    _novasNotas(notas) {
        this.setState({...this.state, notas})
    }

    removeNota(index) {
        this.props.removeNota(index);
    }

    render() {
        return (
            
            <div className="lista-de-notas"> {this.state.notas.map((nota, index) => {
                return (
                    
                        <CardNota key={index} indice={index} titulo={nota.titulo} texto={nota.texto} categoria={nota.categoria} 
                            removeNotaParent={() => this.removeNota({index}) }
                        />
                    
                );
            })}
            </div>
        
        );
    }
}

export default ListaDeNotas;
