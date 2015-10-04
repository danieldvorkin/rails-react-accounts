var Record = React.createClass({
  
  getInitialState: function(){
    return { edit: false };
  },

  handleToggle: function(e){
    e.preventDefault();
    this.setState({ edit: !this.state.edit });
  },

  handleDelete: function(e){
    $.ajax({
      method: 'DELETE',
      url: '/records/' + this.props.record.id,
      dataType: 'JSON',
      success: function() {
        this.props.handleDeleteRecord(this.props.record)
      }.bind(this)
    });
  },

  recordRow: function(){
    return (
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{amountFormat(this.props.record.amount)}</td>
        <td>
          <a className="btn btn-default" onClick={this.handleEdit}>
            edit
          </a>
          <a className="btn btn-danger" onClick={this.handleDelete}>
            Delete
          </a>
        </td>
      </tr>
    );
  },

  recordForm: function(){
    return(
      <tr>
        <td>
          <input className='form-control' type='text'
            defaultValue={this.props.record.date} ref='date'>
          </input>
        </td>
        <td>
          <input className='form-control' type='text'
            defaultValue={this.props.record.title} ref='title'>
          </input>
        </td>
        <td>
          <input className='form-control' type='number'
            defaultValue={this.props.record.amount} ref='amount'>
          </input>
        </td>
      </tr>
    );
  },

  renderedRecord: function(){
    if(this.state.edit === true){
      return this.recordForm();
    } else {
      return this.recordRow();
    }
  },

	render: function() {
    return this.renderedRecord();
  }
});