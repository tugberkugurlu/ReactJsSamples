var React = require('react');

module.exports = React.createClass({
   handleChange: function() {
       this.props.onUserInput(this.refs.nameInput.value);
   }, 
    
   render: function() {
       return (
           <div>
                <strong>First name: </strong> 
                <input type="text" placeholder="First name" value={this.props.value} ref="nameInput" onChange={this.handleChange} />
           </div>
       );
   }
});