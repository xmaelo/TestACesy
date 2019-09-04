import React, { Component }from 'react';
import { Link }  from 'react-router-dom';
import axios  from 'axios';

class App extends Component{
	state = {
		email: null,
		surname: null,
		password: null,
		repeat: null		
	};

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	submit=e => {
		if(this.state.password !== this.state.repeat){
			console.log('password dont macth');
			return;
		}
		e.preventDefault();
		console.log('http://localhost:3000/saveu/'+this.state.email+'/'+this.state.surname+'/'+this.state.password)
		axios.get('http://localhost:3000/saveu/'+this.state.email+'/'+this.state.surname+'/'+this.state.password)
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
		<div className="wrapper">
			<h1>creer un compte</h1>
			<form onSubmit={this.submit}>
				<div>
					<label htmlFor="email">email</label>
					<input type="text" id="email" noValidate onChange={this.handleChange}/>
				</div>
				<div>
					<label htmlFor="surname">surname</label>
					<input type="text" id="surname" noValidate onChange={this.handleChange}/>
				</div>
				<div>
					<label htmlFor="password">password</label>
					<input type="text" id="password" noValidate onChange={this.handleChange}/>
				</div>
				<div>
					<label htmlFor="repeat">repeat</label>
					<input type="text" id="repeat" noValidate onChange={this.handleChange}/>
				</div>
				<div>
				 <button>Enregistrer</button>
				 <Link to="/">Jai le compte </Link>
				</div>
			</form>			
		</div>
	);

	}
}

export default App;