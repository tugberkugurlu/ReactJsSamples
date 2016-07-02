var React = require('react');

module.exports = React.createClass({
   handleChange: function() {
       this.props.onUserInput(this.refs.nameInput.value);
   },
   
   render: function() {
       return (
           <div>
                <strong>Last name: </strong> 
                <input type="text" placeholder="Last name" value={this.props.value} ref="nameInput" onChange={this.handleChange} />
           </div>  
       );
   }
});