import React, {Component, Fragment} from 'react'
import './App.css'

import Table from './Table'
import Form from './Form'

class App extends Component {

	state = {
			autores : [
					{
							nome: 'Paulo',
							livro: 'React',
							preco: '780'
					},
					{
							nome: 'Daniel',
							livro: 'Java',
							preco: '920'
					},
					{
							nome: 'Marcos',
							livro: 'Design',
							preco: '150'
					},
					{
							nome: 'Bruno',
							livro: 'DevOps',
							preco: '100'
					},
					{
							nome: 'Nico',
							livro: 'JavaScript',
							preco: '250'
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
						<Table autores = { this.state.autores } removeAutor = { this.removeAutor } />
						<Form escutadorDeSubmit={this.escutadorDeSubmit}/>
				</Fragment>
		)
	}
}
export default App