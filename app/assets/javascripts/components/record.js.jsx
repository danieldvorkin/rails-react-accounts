var Record = React.createClass({
	render: function() {
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
});