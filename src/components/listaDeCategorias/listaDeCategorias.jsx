import React, { Component } from 'react';
import "./style.css";

class ListaDeCategorias  extends Component {

    constructor() {
        super();
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
        console.log(categorias);
        this.setState({...this.state, categorias})
    }

    _handleText(event) {        
        if(event.key === "Enter") {
            this.props.criarCategoriaParent(event.target.value);
        }        
    } 

    render() { 
        return ( 
            <section className="categorias">
                <ul>
                    {this.state.categorias.map((categoria, index) => {                        
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