import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			lista:[]
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json()).then(json => {
			this.setState({lista:json})
		})
	}

	render() {
		return (
			<div>
				<h3>Página Home...</h3>
				{this.state.lista.length == 0 && 
					<i>Carregando...</i>
				}
				{this.state.lista.length > 0 && 
					<ul>
						{this.state.lista.map((item)=>{
							return(
								<li>#{item.id} - {item.title}</li>
							)
						})}
					</ul>
				}

				<br/>
				<Link to="/sobre">Ir para página sobre</Link>
			</div>
		);
	}

}