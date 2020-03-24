import React, {Component, Fragment} from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './App.css'

import Header from './Header'
import Table from './Table'
import Form from './Form'

class App extends Component {

	state = {
			autores : [
					{
							nome: 'Paulo',
							livro: 'React',
							preco: 'R$780,00'
					},
					{
							nome: 'Daniel',
							livro: 'Java',
							preco: 'R$920,00'
					},
					{
							nome: 'Marcos',
							livro: 'Design',
							preco: 'R$150,00'
					},
					{
							nome: 'Bruno',
							livro: 'DevOps',
							preco: 'R$100,00'
					},
					{
							nome: 'Nico',
							livro: 'JavaScript',
							preco: 'R$250,00'
					}
			],
	}

	removeAutor = index =>{
  const { autores } = this.state;

  this.setState( 
    {
      autores : autores.filter((autor, posAtual) => {
							return posAtual !== index
      }),
    }
  )
	}

	escutadorDeSubmit = autor => {
		this.setState({ autores:[...this.state.autores, autor] })
	}

	render() {		
		return (
				<Fragment>
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
					<Header />
					<div className="container mb-10">
					<Table autores = { this.state.autores } removeAutor = { this.removeAutor } />
					<Form escutadorDeSubmit={this.escutadorDeSubmit}/>
					</div>
				</Fragment>
		)
	}
}
export default App