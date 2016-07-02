var React = require('react');

module.exports = React.createClass({
   render: function() {
       return (
           <div>
                <span>{this.props.person.firstName}</span> <span>{this.props.person.lastName}</span>
           </div>  
       );
   }
});