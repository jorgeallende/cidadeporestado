import React, { Component } from 'react'
import './main.css'
import Table from '../components/Table'
import axios from 'axios'


export default class Main extends Component {


    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('UF: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="main">
                <h2>Cidades por estado</h2>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Estado
                            <br></br>
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Pesquisar" placeholder="Exemplo: RN" />
                    </form>
                </div>
                <br></br>
                <br></br>
                <Table/>
            </div>
        )
    }
}