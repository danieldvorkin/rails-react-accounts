var Records = React.createClass({
	getInitialState: function(){
		return { records: this.props.data };
	},

	getDefaultProps: function() {
    return { records: [] };
  },

  addRecord: function(record){
  	var records = React.addons.update(this.state.records, { $push: [record] })
  	this.setState({ records: records });
  },
	
	// Renders the entire component
  render: function() {
  	return (
  		<div className="records">
  			<h2 className="title">Records</h2>
  			<RecordForm handleNewRecord={this.addRecord} />
	  		<table className="table table-bordered">
	  			<thead>
	  				<tr>
	  					<th>Date</th>
	  					<th>Title</th>
	  					<th>Amount</th>
	  					<th>Actions</th>
	  				</tr>
	  			</thead>
	  			<tbody>
	  				{this.state.records.map(function(record){
	  					return <Record key={record.id} record={record}/>
	  				}.bind(this))}
	  			</tbody>
	  		</table>
	  	</div>
  	);
  }
});