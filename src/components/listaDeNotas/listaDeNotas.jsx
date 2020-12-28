import React, { Component } from 'react';
import CardNota from '../cardNota/cardNota';
import "./style.css";

class ListaDeNotas extends Component {

    removeNota(index) {
        this.props.removeNota(index);
    }

    render() {
        return (
            
            <div className="lista-de-notas"> {this.props.notas.map((nota, index) => {
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
