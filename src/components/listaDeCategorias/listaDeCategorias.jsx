import React, { Component } from 'react';
import "./style.css";

class ListaDeCategorias  extends Component {
    
    _handleText(event) {        
        if(event.key === "Enter") {
            this.props.criarCategoriaParent(event.target.value);
        }        
    } 

    render() { 
        return ( 
            <section className="categorias">
                <ul>
                    {this.props.categorias.map((categoria, index) => {                        
                        return (
                            <li key={index}>
                                {categoria}
                            </li>
                        );
                    })}
                </ul>
                <input 
                    type="text" 
                    placeholder="Adicione uma categoria"
                    onKeyUp={this._handleText.bind(this)}
                />
            </section>
            
        );
    }
}

export default ListaDeCategorias;