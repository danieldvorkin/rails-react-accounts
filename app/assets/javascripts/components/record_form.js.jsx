var RecordForm = React.createClass({
	getInitialState: function(){
		return { title: '', date: '', amount: '' }
	},

	handleChange: function(e){
		var name = e.target.name; 	// Creating a key which will hold name
		var obj = {}; 							// Creating empty object which will hold the key value pair -> name:value
		obj[name] = e.target.value; //  key    :     value       assignment!
		this.setState(obj);					//setState performs 2 actions: update the state, UI check based on new state
	},

	handleSubmit: function(e){
		e.preventDefault();																//Prevent default action made by button click
		$.post('',																				//Create new post as empty string
						{ record: this.state},										//Acquire the state of record 
						function(data){														
							this.props.handleNewRecord(data);				//Pass the properties of that new record back to the parent
							this.setState(this.getInitialState());  //Set the state, and verify ui for changes, then refresh
						}.bind(this), 														//Bind the instance of the component
						'JSON'																		//Pass the new record data as json objects
		);
	},

	valid: function(){
		return(this.state.title && this.state.date && this.state.amount);
	},

	render: function(){
		return(
			<form className="form-inline" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Date" name="date" 
																											value={this.state.date} onChange={this.handleChange}>
					</input>
				</div>
				<div className="form-group">
					<input type='text' className='form-control' placeholder='Title' name="title" 
																											value={this.state.title} onChange={this.handleChange}>
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