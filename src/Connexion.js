import React, { Component }from 'react';
import { Link }  from 'react-router-dom'
import axios  from 'axios';
import { Redirect } from 'react-router-dom';

class App extends Component{

	constructor(props, context){
		super(props, context);
	}
	state = {
		email: null,
		password: null		
	};



	

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	submit=e => {
		e.preventDefault();

		const headers =  {'Content-Type': 'application/json'};
		axios.get('http://localhost:3000/login/'+this.state.email)
			.then(response =>{
				console.log(response);
				var data = response.data.success;
				console.log(data);

				if(data===true)
				{
						this.props.history.push('/home/'+this.state.email);			
				}
			})
			.catch(error => {
				return <div>Auth failled</div>
			});
	}


	render(){
		return (
		<div>
			<div className="tex-center"><h1>Se connecter</h1></div>
			
			<form onSubmit={this.submit}>
				<div className="form-group">
					 <div className="row">
              			<div className="col-3">

							<label htmlFor="email">Login</label>
						</div>
						<div className="col-6">
							<input type="text" id="email" noValidate onChange={this.handleChange}/>
						</div>
					</div>
				</div>

				<div className="form-group">
					 <div className="row">
	          			<div className="col-3">
							<label htmlFor="password">password</label>
						</div>
						<div className="col-6">
							<input type="text" id="password" noValidate onChange={this.handleChange}/>
						</div>
					</div>
				</div>
				<div className="form-group">
					 <div className="row">
	          			<div className="col-3">

						  <button>Envoyer></button>
						 </div>
						 <div className="col-3">
						  <Link to="create">Creer un compte</Link>

						</div>
					</div>
				</div>
			</form>	
		</div>
	);

	}
}

export default App;
