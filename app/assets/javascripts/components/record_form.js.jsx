var RecordForm = React.createClass({
	getInitialState: function(){
		return { title: '',
						date: '',
					  amount: '' }
	},

	handleChange: function(){
		// Creating the key which is name
		var name = e.target.name;

		// Creating empty object which will hold the key value pair -> name:value
		var obj = {};

		//  key         value       assignment!
		obj[name] = e.target.value;

		//setState performs 2 actions: update the state, UI check based on new state
		this.setState(obj);
	},

	render: function(){
		return(
			<form className="form-inline">
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Date" name="date" 
																											value={this.state.date} onChange={this.handleChange}>
					</input>
				</div>
				<div className="form-group">
					<input type='text' className='form-control' placeholder='Title' name="title" 
																											value=[this.state.title] onChange={this.handleChange}>
					</input>
				</div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Amount" name='amount'
																											 value={this.state.amount} onChange={this.handleChange}>
					</input>
				</div>
				<div className="form-group">
					<input type="submit" className="btn btn-primary" disabled={!this.valid()}>
					</input>
				</div>
			</form>
		);
	}
});