import React, { Component } from 'react';
import "./style.css";
import deleteSVG from "../../assets/img/delete.svg";

class CardNota extends Component {
    state = {}
    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_header">
                    <h1>{this.props.titulo}</h1>
                    <img src={deleteSVG} className="icon_trash" />
                </header>                
                <p>{this.props.texto}</p>
            </section>
        );
    }
}

export default CardNota;