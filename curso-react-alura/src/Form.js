import React, {Component} from 'react'
import FormValidator from './FormValidator'

class Form extends Component {

	constructor(props) {

		super(props)

		this.validador = new FormValidator([
			{
			campo:'nome',
			metodo: 'isEmpty',
			validoQuando: false,
			mensagem: 'Entre com um nome'
			},
			{

			}
		])

		this.stateInicial = {
			nome:'',
			livro:'',
			preco:'',
		}

		this.state = this.stateInicial
	}

	escutadorDeInput = event => {

		const {name,value} = event.target
		
		this.setState({
			[name] : value
		})
	}

	submitForm = () =>{

		if (this.validador.valida(this.state)) {

			this.props.escutadorDeSubmit(this.state)
			this.setState(this.stateInicial)
		}
	}

	render(){

		const {nome,livro,preco} = this.state

		return(
			<form>
				
				<div className="row">
					<div className="input-field col s4">
						<label className="input-field" htmlFor="nome">Nome</label>
						<input className="validate" id="nome" type="text" name="nome" value={nome} onChange={this.escutadorDeInput}/>
					</div>
					<div className="input-field col s4">
						<label className="input-field" htmlFor="livro">Livro</label>
						<input className="validate" id="livro" type="text" name="livro" value={livro} onChange={this.escutadorDeInput}/>
					</div>
					<div className="input-field col s4">
						<label className="input-field" htmlFor="preco">Preço</label>
						<input className="validate" id="preco" type="text" name="preco" value={preco} onChange={this.escutadorDeInput}/>
					</div>
				</div>

				<button onClick={this.submitForm} type="button" className="btn waves-effect waves-light indigo lighten-2">Salvar
				<i className="tiny material-icons right">send</i>
				</button>

			</form>
		)
	}
}
export default Form